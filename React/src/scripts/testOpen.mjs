import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true});

export async function Openai([targetAudience, ppt, objective]) {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are creating content for an ALS Awareness Campaign to Raise awareness and support for ALS research and patient care"},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": `Create content for an ALS Awareness Campaign to Raise awareness and support for ALS research and patient care for the target audience ${targetAudience} with the objective ${objective} and the prompt ${ppt}`}],
    model: "gpt-3.5-turbo",
  });
  console.log('here')
  return completion.choices[0]

  console.log(completion.choices[0]);
}
// main();

// Openai(["Kids","create a kindergarden awareness campaign", "have kids learn about ALS"])
//   .then(summary => console.log(summary))
//   .catch(error => console.error(error));
