# Add a new chunk
new_chunk = {
    "id": 180,
    "author": "user",
    "payload": {"type": "text", "text": "Thanks, that helps!"}
}
loaded_prompt["chunkedPrompt"]["chunks"].append(new_chunk)

# Save updated version
with open("chunked_prompt.json", "w") as f:
    json.dump(loaded_prompt, f, indent=4)
