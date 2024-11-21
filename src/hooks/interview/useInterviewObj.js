import { useCallback, useState } from 'react';

/* Constants */
const INTERVIEW_OBJ = Object.freeze({
  question: null,
  answerSystem: null,
  answerUser: null,
  feedback: null,
});

/**
 *
 * @returns
 */
const useInterviewObj = () => {
  /* Hooks */
  // useState
  const [interviewObjState, setInterviewObjState] = useState(INTERVIEW_OBJ);

  /* Func */
  const initInterviewObj = useCallback(() => {
    setInterviewObjState(prevState => ({
      ...prevState,
      ...INTERVIEW_OBJ,
    }));
  }, []);
  const addInterviewObj = useCallback(obj => {
    setInterviewObjState(prevState => ({
      ...prevState,
      ...obj,
    }));
  }, []);
  const isInterviewObjEmpty = useCallback(() => {
    return (
      interviewObjState.question === null &&
      interviewObjState.answerSystem === null &&
      interviewObjState.answerUser === null &&
      interviewObjState.feedback === null
    );
  }, [interviewObjState]);
  const isInterviewObjFull = useCallback(() => {
    return (
      interviewObjState.question !== null &&
      interviewObjState.answerSystem !== null &&
      interviewObjState.answerUser !== null &&
      interviewObjState.feedback !== null
    );
  }, [interviewObjState]);
  const isOnlyFeedbackEmpty = useCallback(() => {
    return (
      interviewObjState.question !== null &&
      interviewObjState.answerSystem !== null &&
      interviewObjState.answerUser !== null &&
      interviewObjState.feedback === null
    );
  }, [interviewObjState]);
  const getQuestion = useCallback(() => {
    return interviewObjState.question;
  }, [interviewObjState]);

  /* Return */
  return {
    interviewObjState,
    initInterviewObj,
    addInterviewObj,
    isInterviewObjEmpty,
    isInterviewObjFull,
    isOnlyFeedbackEmpty,
    getQuestion,
  };
};

export default useInterviewObj;
