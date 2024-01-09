// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const apiKey = "";
const apiUrl = 'https://api.openai.com/v1/chat/completions'; // Updated API endpoint for ChatGPT 3.5

// Example conversation for chat completion
const messages = [
  { role: 'system', content: 'You are a helpful assistant.' },
  { role: 'user', content: 'What is the capital of Spain?' },
];

// Create headers with your API key
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
};

// Create the request payload
const data = {
  messages: messages,
};

// Make the fetch request
fetch(apiUrl, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
    const answerData = document.getElementById('answer');
    answerData.value = data.choices[0].message.content;
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });