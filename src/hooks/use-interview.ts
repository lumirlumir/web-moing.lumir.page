/**
 * @fileoverview use-interview
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { useCallback, useEffect } from 'react';
import qs from 'qs';

import useInterviewContent from '@/hooks/use-interview-content';
import useInterviewHistory from '@/hooks/use-interview-history';
import useInterviewObj from '@/hooks/use-interview-obj';
import useTrigger from '@/hooks/use-trigger';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const url = (path, obj) =>
  `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/${path}?${qs.stringify(obj)}`;

const fetchQuestionMain = async (type, history) =>
  (await (await fetch(url('question/main', { type, history }))).json())?.text;

const fetchQuestionSub = async (question, answerUser) =>
  (await (await fetch(url('question/sub', { question, answerUser }))).json())?.text;

const fetchAnswer = async question =>
  (await (await fetch(url('answer', { question }))).json())?.text;

const fetchFeedback = async (answerSystem, answerUser) =>
  (await (await fetch(url('feedback', { answerSystem, answerUser }))).json())?.text;

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function useInterview() {
  /* Hooks */
  // useInterviewContent
  const { contentRef, listening, toggleListening } = useInterviewContent();
  // useInterviewHistory
  const {
    interviewHistoryRef,
    initInterviewHistory,
    isQuestionMain,
    isInterviewDone,
    getQuestionMainHistory,
    getInterviewInfo,
    getInterviewHistory,
  } = useInterviewHistory();
  // useInterviewObj
  const {
    interviewObjState,
    initInterviewObj,
    addInterviewObj,
    isInterviewObjEmpty,
    isInterviewObjFull,
    isOnlyFeedbackEmpty,
    getQuestion,
  } = useInterviewObj();
  // useTrigger
  const { triggerState, trigger } = useTrigger();

  /* Func Private */
  // generateChain
  const fetchChainFirst = useCallback(() => {
    const generateQuestion = isQuestionMain()
      ? fetchQuestionMain(getInterviewInfo().questionType, getQuestionMainHistory())
      : fetchQuestionSub(
          interviewHistoryRef.current.at(-1).question,
          interviewHistoryRef.current.at(-1).answerUser,
        );

    generateQuestion
      .then(result => {
        addInterviewObj({ question: result });

        return result;
      })
      .then(PrevResult => {
        fetchAnswer(PrevResult).then(result => {
          addInterviewObj({ answerSystem: result });
        });
      });
  }, [
    interviewHistoryRef,
    isQuestionMain,
    getQuestionMainHistory,
    getInterviewInfo,
    addInterviewObj,
  ]);
  const fetchChainSecond = useCallback(() => {
    fetchFeedback(interviewObjState.answerSystem, interviewObjState.answerUser).then(
      result => {
        addInterviewObj({ feedback: JSON.parse(result) });
      },
    );
  }, [interviewObjState, addInterviewObj]);

  /* Hooks - useEffect */
  useEffect(() => {
    /* Return */
    if (!triggerState) return; // before init.
    if (isInterviewDone()) return; // interview done.

    /* Test */
    // console.log('hello useEffect');

    /* ... */
    if (isInterviewObjEmpty()) {
      // console.log('fetchChainFirst()');
      fetchChainFirst();
    }
    if (isOnlyFeedbackEmpty()) {
      // console.log('fetchChainSecond()');
      fetchChainSecond();
    }
    if (isInterviewObjFull()) {
      // console.log('addInterviewHistory()');
      interviewHistoryRef.current.push(interviewObjState);
      // console.log('initInterviewObj()');
      initInterviewObj();
    }
  }, [
    interviewHistoryRef,
    isInterviewDone,
    interviewObjState,
    initInterviewObj,
    isInterviewObjEmpty,
    isInterviewObjFull,
    isOnlyFeedbackEmpty,
    fetchChainFirst,
    fetchChainSecond,
    triggerState,
  ]);

  /* Func Public */
  const initInterview = useCallback(
    configState => {
      initInterviewHistory(configState);
      trigger();
    },
    [initInterviewHistory, trigger],
  );
  const submit = useCallback(() => {
    addInterviewObj({ answerUser: contentRef.current.innerText });
    // eslint-disable-next-line react-hooks/react-compiler -- TODO: It's Ref so safe.
    contentRef.current.innerHTML = '';
  }, [contentRef, addInterviewObj]);

  return {
    // useInterviewContent
    contentRef,
    listening,
    toggleListening,
    // useInterviewHistory
    isInterviewDone,
    getInterviewInfo,
    getInterviewHistory,
    // useInterviewObject
    getQuestion,
    // useInterview
    initInterview,
    submit,
  };
}
