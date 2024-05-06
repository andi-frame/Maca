import OpenAI from "openai";

const openai = new OpenAI();

async function askChatGpt() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0];
}

export default askChatGpt;