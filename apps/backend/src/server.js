/**
 * @fileoverview server.js
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import http from 'node:http';
import url from 'node:url';
import qs from 'qs';
import {
  fetchQuestionMain,
  fetchQuestionSub,
  fetchAnswer,
  fetchFeedback,
} from './fetch.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

function response(res, code, text) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ text }));
}

// --------------------------------------------------------------------------------
// Server
// --------------------------------------------------------------------------------

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL); // CORS

    const { pathname, query } = url.parse(req.url); // eslint-disable-line n/no-deprecated-api -- TODO: delete it later.
    const queryParsed = qs.parse(query); // for array

    console.log(`TIME: ${new Date()}\nMETHOD: ${req.method}\nURL: ${req.url}`); // eslint-disable-line no-console -- for debugging.
    console.log(queryParsed, '\n'); // eslint-disable-line no-console -- for debugging.

    if (req.method === 'GET') {
      switch (pathname) {
        case '/question/main': {
          const { type, history } = queryParsed;

          // @ts-expect-error -- TODO
          fetchQuestionMain(type, typeof history === 'undefined' ? [] : history).then(
            result => response(res, 200, result),
          );
          break;
        }
        case '/question/sub': {
          const { question, answerUser } = queryParsed;

          // @ts-expect-error -- TODO
          fetchQuestionSub(question, answerUser).then(result =>
            response(res, 200, result),
          );
          break;
        }
        case '/answer': {
          const { question } = queryParsed;

          // @ts-expect-error -- TODO
          fetchAnswer(question).then(result => response(res, 200, result));
          break;
        }
        case '/feedback': {
          const { answerSystem, answerUser } = queryParsed;

          // @ts-expect-error -- TODO
          fetchFeedback(answerSystem, answerUser).then(result =>
            response(res, 200, result),
          );
          break;
        }
        default: {
          response(res, 400, 'Invalid Request');
          break;
        }
      }
    }
  })
  .listen(process.env.BACKEND_PORT);
