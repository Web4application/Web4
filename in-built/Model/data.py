# Extract chunks
chunks = loaded_prompt["chunkedPrompt"]["chunks"]

# Flatten into a list of dicts
data = [
    {
        "id": chunk["id"],
        "author": chunk["author"],
        "type": chunk["payload"]["type"],
        "text": chunk["payload"]["text"]
    }
    for chunk in chunks
]

# Create DataFrame
df = pd.DataFrame(data)
df
