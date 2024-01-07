let question;
let answer;

//const openai = require('openai');
//const apiKey = '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';
//openai.apiKey = apiKey;

function sendToOpenAI(){
    // Get input from textarea
    inputText = question = document.getElementById('question').value;

    fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
          prompt: inputText,
          max_tokens: 100,
        }),
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the OpenAI API
        console.log(data);

        // Display the API response in the output textarea
        document.getElementById('answer').value = data.choices[0].text;
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error occurred while communicating with OpenAI API.');
      });
    }
