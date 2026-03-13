for chunk in loaded_prompt["chunkedPrompt"]["chunks"]:
    author = chunk["author"]
    text = chunk["payload"]["text"]
    print(f"{author} said: {text}")
