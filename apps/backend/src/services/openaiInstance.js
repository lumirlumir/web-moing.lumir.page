const OpenAI = require('openai');

const openaiInstance = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = openaiInstance;
