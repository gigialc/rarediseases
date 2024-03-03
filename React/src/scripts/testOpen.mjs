// import fetch from 'node-fetch';


// async function OpenAI([targetAudience, ppt, objective]) {
//     const OPENAI_URL = 'https://api.openai.com/v1/completions';
//     const prompt = `Create content for an ALS Awareness Campaign
//     to Raise awareness and support for ALS research and patient care for the target audience ${targetAudience}
//     with the objective ${objective} and the prompt ${ppt}`;
//     const apiKey = 'APIKEY';
  
//     try {
//       const response = await fetch(OPENAI_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           model: 'text-davinci-002',
//           prompt: prompt,
//           temperature: 0.7,
//           max_tokens: 1024,
//           top_p: 1.0,
//           frequency_penalty: 0.0,
//           presence_penalty: 0.0,
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`OpenAI API call failed with status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       return data.choices[0].text;
//     } catch (error) {
//       console.error("Error processing request with OpenAI: ", error);
//       throw error;
//     }
//   }
  
// OpenAI(["Kids","create a kindergarden awareness campaign", "have kids learn about ALS"])
//   .then(summary => console.log(summary))
//   .catch(error => console.error(error));

import OpenAI from "openai";

const openai = new OpenAI({ apiKey: 'APIKEY'});

async function Openai([targetAudience, ppt, objective]) {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are creating content for an ALS Awareness Campaign to Raise awareness and support for ALS research and patient care"},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": `Create content for an ALS Awareness Campaign to Raise awareness and support for ALS research and patient care for the target audience ${targetAudience} with the objective ${objective} and the prompt ${ppt}`}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
// main();

Openai(["Kids","create a kindergarden awareness campaign", "have kids learn about ALS"])
  .then(summary => console.log(summary))
  .catch(error => console.error(error));
