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
export default function useInterviewObj() {
  const [interviewObjState, setInterviewObjState] = useState(INTERVIEW_OBJ);

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
  const isInterviewObjEmpty = useCallback(
    () =>
      interviewObjState.question === null &&
      interviewObjState.answerSystem === null &&
      interviewObjState.answerUser === null &&
      interviewObjState.feedback === null,
    [interviewObjState],
  );
  const isInterviewObjFull = useCallback(
    () =>
      interviewObjState.question !== null &&
      interviewObjState.answerSystem !== null &&
      interviewObjState.answerUser !== null &&
      interviewObjState.feedback !== null,
    [interviewObjState],
  );
  const isOnlyFeedbackEmpty = useCallback(
    () =>
      interviewObjState.question !== null &&
      interviewObjState.answerSystem !== null &&
      interviewObjState.answerUser !== null &&
      interviewObjState.feedback === null,
    [interviewObjState],
  );
  const getQuestion = useCallback(() => interviewObjState.question, [interviewObjState]);

  return {
    interviewObjState,
    initInterviewObj,
    addInterviewObj,
    isInterviewObjEmpty,
    isInterviewObjFull,
    isOnlyFeedbackEmpty,
    getQuestion,
  };
}
