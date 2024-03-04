// Example OpenAI function using Fetch API
async function OpenAI(articleContent) {
    const OPENAI_URL = 'https://api.openai.com/v1/completions';
    const prompt = `Summarize this article: ${articleContent}`;
    const apiKey = process.env.OPENAI_API_KEY;

    try {
      const response = await fetch(OPENAI_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'text-davinci-002',
          prompt: prompt,
          temperature: 0.7,
          max_tokens: 1024,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`OpenAI API call failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.choices[0].text;
    } catch (error) {
      console.error("Error processing request with OpenAI: ", error);
      throw error;
    }
  }
  