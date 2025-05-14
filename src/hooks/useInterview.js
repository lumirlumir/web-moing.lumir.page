import { useCallback, useEffect } from 'react';

import useInterviewContent from '@/hooks/useInterviewContent';
import useInterviewHistory from '@/hooks/useInterviewHistory';
import useInterviewObj from '@/hooks/useInterviewObj';
import useTrigger from '@/hooks/useTrigger';

import {
  fetchQuestionMain,
  fetchQuestionSub,
  fetchAnswer,
  fetchFeedback,
} from '@/utils/openaiService';

const useInterview = () => {
  /* Hooks */
  // useInterviewContent
  const { contentRef, getTextContent, setHTMLContent, listening, toggleListening } =
    useInterviewContent();
  // useInterviewHistory
  const {
    interviewHistoryRef,
    initInterviewHistory,
    addInterviewHistory,
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
      addInterviewHistory(interviewObjState);
      // console.log('initInterviewObj()');
      initInterviewObj();
    }
  }, [
    addInterviewHistory,
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
    addInterviewObj({ answerUser: getTextContent() });
    setHTMLContent('');
  }, [getTextContent, setHTMLContent, addInterviewObj]);

  /* Return */
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
};

export default useInterview;
