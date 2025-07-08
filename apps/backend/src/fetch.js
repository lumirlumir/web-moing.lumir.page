/**
 * @fileoverview fetch.js
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import OpenAI from 'openai';
import { questionMain, questionSub, answer, feedback } from './prompt.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { CustomChatCompletionMessageParam } from './types.d.ts';
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const openaiInstance = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Fetches a response from OpenAI's chat completion API.
 * @param {Array<CustomChatCompletionMessageParam>} messages
 * @returns {Promise<string>}
 */
async function fetching(messages) {
  const response = await openaiInstance.chat.completions.create({
    ...{
      model: 'gpt-4.1-nano',
      temperature: 1,
      top_p: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_completion_tokens: 2048,
    },
    messages,
  });

  return response?.choices?.[0]?.message?.content;
}

/**
 * Creates a message object for OpenAI API.
 * @param {'system' | 'assistant' | 'user'} role
 * @param {string} text
 * @returns {OpenAI.ChatCompletionSystemMessageParam | OpenAI.ChatCompletionAssistantMessageParam | OpenAI.ChatCompletionUserMessageParam}
 */
function createMessageObject(role, text) {
  return {
    role,
    content: [
      {
        text,
        type: 'text',
      },
    ],
  };
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Fetches the main question.
 * @param {'cs' | 'fe' | 'be' | 'db' | 'oop'} type
 * @param {string[]} history
 * @returns
 */
export const fetchQuestionMain = async (type, history) =>
  fetching([
    ...questionMain[type].messages,
    ...history.map(text => createMessageObject('assistant', text)),
  ]);

/**
 * Fetches the sub question.
 * @param {string} question
 * @param {string} answerUser
 * @returns
 */
export const fetchQuestionSub = async (question, answerUser) =>
  fetching([
    ...questionSub.messages,
    createMessageObject(
      'user',
      `Previous Question\n\n${question}\n\nUSER's Answer\n\n${answerUser}`,
    ),
  ]);

/**
 * Fetches the answer.
 * @param {string} question
 * @returns
 */
export const fetchAnswer = async question =>
  fetching([...answer.messages, createMessageObject('user', question)]);

/**
 * Fetches the feedback.
 * @param {string} answerSystem
 * @param {string} answerUser
 * @returns
 */
export const fetchFeedback = async (answerSystem, answerUser) =>
  fetching([
    ...feedback.messages,
    createMessageObject(
      'user',
      `Correct Answer\n\n${answerSystem}\n\nUSER's Answer\n\n${answerUser}`,
    ),
  ]);
