import json

chunks = [
    {"id": 178, "author": "user", "text": "Summerise the project"},
    {"id": 179, "author": "model", "text": "Outlining Project Scope..."}
]

with open("chunked_prompt.jsonl", "w") as f:
    for chunk in chunks:
        f.write(json.dumps(chunk) + "\n")
