from dataclasses import dataclass
from typing import Optional, List, Dict
import logging
import torch
from cpufeature import CPUFeature
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel
from concurrent.futures import ThreadPoolExecutor

# -------------------------------
# Logging Setup
# -------------------------------
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("lmlm_all_ai_parallel.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger("Lmlm")

# -------------------------------
# Model Info
# -------------------------------
@dataclass
class ModelInfo:
    repo: str
    adapter: Optional[str] = None
    name: Optional[str] = None

# Include all your AI models here
MODELS: List[ModelInfo] = [
    ModelInfo(repo="lmlm/Llama-2-70b-chat-hf", name="Lmlm"),
    ModelInfo(repo="lmlm/llama-65b-hf", name="Llama65"),
    ModelInfo(repo="lmlm/llama-65b-hf", adapter="timdettmers/guanaco-65b", name="Guanaco65"),
    ModelInfo(repo="lmlm/rodaai", name="RodaAI"),
    ModelInfo(repo="stabilityai/StableBeluga2", name="StableBeluga2"),
    ModelInfo(repo="bigscience/bloomz", name="BloomZ"),
    ModelInfo(repo="kubu-hai.model.h5-2", adapter="kubu-hai.model.mat-2", name="KubuHai"),
]

DEFAULT_MODEL_NAME = "Lmlm"

# -------------------------------
# Device & Precision Setup
# -------------------------------
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
cpu_features = CPUFeature()
if DEVICE == "cuda":
    TORCH_DTYPE = "auto"
elif cpu_features.has_avx512f and cpu_features.has_os_avx512:
    TORCH_DTYPE = torch.bfloat16
else:
    TORCH_DTYPE = torch.float32

logger.info(f"Device: {DEVICE}, Torch dtype: {TORCH_DTYPE}")

# -------------------------------
# Preprocessing / Postprocessing
# -------------------------------
def preprocess(prompts: List[str], tokenizer: AutoTokenizer) -> dict:
    tokens = tokenizer(prompts, return_tensors="pt", padding=True, truncation=True)
    return tokens.to("cpu")

def postprocess(output_tokens: torch.Tensor, tokenizer: AutoTokenizer) -> List[str]:
    return [tokenizer.decode(t, skip_special_tokens=True) for t in output_tokens]

# -------------------------------
# LMLM Model Loader
# -------------------------------
class LMLMModel:
    def __init__(self, model_info: ModelInfo):
        self.name = model_info.name or model_info.repo
        self.repo = model_info.repo
        self.adapter = model_info.adapter
        self.device = DEVICE

        try:
            logger.info(f"[{self.name}] Loading model: {self.repo}")
            self.tokenizer = AutoTokenizer.from_pretrained(self.repo)
            self.model = AutoModelForCausalLM.from_pretrained(
                self.repo,
                device_map="auto" if DEVICE == "cuda" else None,
                torch_dtype=TORCH_DTYPE if DEVICE=="cuda" else None
            )

            if self.adapter:
                logger.info(f"[{self.name}] Applying adapter: {self.adapter}")
                self.model = PeftModel.from_pretrained(self.model, self.adapter)

            self.model.eval()
            logger.info(f"[{self.name}] Loaded successfully.")

        except Exception as e:
            logger.error(f"[{self.name}] Failed to load model '{self.repo}': {e}")
            raise RuntimeError(f"Cannot load LMLM model {self.repo}") from e

    def generate(self, prompts: List[str], max_tokens: int = 50) -> List[str]:
        inputs = preprocess(prompts, self.tokenizer)
        if DEVICE == "cuda":
            inputs = {k: v.to(DEVICE) for k, v in inputs.items()}

        with torch.no_grad():
            output_tokens = self.model.generate(**inputs, max_new_tokens=max_tokens)

        output_tokens = output_tokens.to("cpu")
        return postprocess(output_tokens, self.tokenizer)

# -------------------------------
# Unified Multi-AI System
# -------------------------------
class LmlmSystem:
    def __init__(self, models: List[ModelInfo]):
        self.models: Dict[str, LMLMModel] = {}
        for m in models:
            try:
                ai_model = LMLMModel(m)
                self.models[m.name] = ai_model
            except Exception as e:
                logger.warning(f"Failed to load model '{m.name}': {e}")

    def get_model(self, name: str = DEFAULT_MODEL_NAME) -> LMLMModel:
        if name in self.models:
            return self.models[name]
        else:
            raise ValueError(f"Model '{name}' not found. Available models: {list(self.models.keys())}")

    def generate_all(self, prompts: List[str], max_tokens: int = 50) -> Dict[str, List[str]]:
        """
        Generate responses for all AI models in parallel.
        Returns dict: model_name -> list of responses
        """
        results = {}

        def run_model(model_name: str, model: LMLMModel):
            try:
                responses = model.generate(prompts, max_tokens=max_tokens)
                results[model_name] = responses
            except Exception as e:
                logger.error(f"[{model_name}] Failed during generation: {e}")
                results[model_name] = ["Error"] * len(prompts)

        # Run all models in parallel threads
        with ThreadPoolExecutor() as executor:
            for name, model in self.models.items():
                executor.submit(run_model, name, model)

        return results

# -------------------------------
# Example Usage
# -------------------------------
if __name__ == "__main__":
    system = LmlmSystem(MODELS)

    batch_prompts = [
        "Explain blockchain technology in simple terms.",
        "Write a short story about AI and humans.",
        "What is quantum computing?"
    ]

    # Generate across all AI models in parallel
    all_responses = system.generate_all(batch_prompts, max_tokens=100)

    for model_name, responses in all_responses.items():
        logger.info(f"--- Responses from {model_name} ---")
        for prompt, response in zip(batch_prompts, responses):
            logger.info(f"Prompt: {prompt}")
            logger.info(f"Response: {response}")
