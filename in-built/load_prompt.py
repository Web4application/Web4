import json

# Load from file
with open("chunked_prompt.json", "r") as f:
    loaded_prompt = json.load(f)

# Check the structure
print(loaded_prompt)
