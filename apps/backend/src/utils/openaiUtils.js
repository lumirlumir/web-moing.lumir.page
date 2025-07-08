/**
 *
 * @param {string} role select among 'system', 'assistant', 'user'
 * @param {string} text
 * @returns
 */
export const createMessagesObject = (role, text) => ({
  role,
  content: [
    {
      text,
      type: 'text',
    },
  ],
});

/**
 *
 * @param {string} role select among 'system', 'assistant', 'user'
 * @param {string[]} array
 * @returns
 */
export const stringArrayToMessagesObjectArray = (role, array) =>
  array.map(text => createMessagesObject(role, text));
