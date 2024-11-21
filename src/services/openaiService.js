import qs from 'qs';

const url = (path, obj) =>
  `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/${path}?${qs.stringify(obj)}`;

export const fetchQuestionMain = async (type, history) =>
  (await (await fetch(url('question/main', { type, history }))).json())?.text;

export const fetchQuestionSub = async (question, answerUser) =>
  (await (await fetch(url('question/sub', { question, answerUser }))).json())?.text;

export const fetchAnswer = async question =>
  (await (await fetch(url('answer', { question }))).json())?.text;

export const fetchFeedback = async (answerSystem, answerUser) =>
  (await (await fetch(url('feedback', { answerSystem, answerUser }))).json())?.text;
