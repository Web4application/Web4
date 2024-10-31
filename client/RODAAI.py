async function interactWithChatGPT(messages) {
    const apiKey = '$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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${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}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: messages,
        }),
    });

    const result = await response.json();
    console.log(result.choices[0].message.content);
    // Process and display the model's response in your web4 application
}

// Example usage
const conversation = [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Who won the world series in 2020?' },
];

interactWithChatGPT(conversation);
