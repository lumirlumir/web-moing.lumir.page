import { useCallback, useRef } from 'react';

import useHistoryRef from '@/hooks/use-history-ref';

/**
 *
 * @returns
 */
export default function useInterviewHistory() {
  /* Hooks */
  // useHistoryRef
  const { historyRef, addHistory } = useHistoryRef();
  // useRef
  const questionTypeRef = useRef([]); // array
  const rowRef = useRef(null); // number
  const colRef = useRef(null); // number

  /* Func */
  const initInterviewHistory = useCallback(configState => {
    const { questionType, questionMain, questionSub } = configState;

    questionTypeRef.current = Object.keys(questionType).filter(key => questionType[key]); // Extract only the keys with true values
    rowRef.current = questionMain;
    colRef.current = questionSub + 1;
  }, []);
  const isQuestionMain = useCallback(
    () => historyRef.current.length % colRef.current === 0,
    [historyRef],
  );
  const isInterviewDone = useCallback(
    () =>
      historyRef.current.length ===
      questionTypeRef.current.length * rowRef.current * colRef.current,
    [historyRef],
  );
  const getQuestionMainHistory = useCallback(() => {
    const questionMainHistory = [];

    for (let i = 0; i < historyRef.current.length; i += colRef.current) {
      questionMainHistory.push(historyRef.current[i].question);
    }

    return questionMainHistory;
  }, [historyRef]);
  const getInterviewInfo = useCallback(
    () => ({
      questionType:
        questionTypeRef.current[
          Math.floor(historyRef.current.length / (rowRef.current * colRef.current))
        ],
      questionMain:
        (Math.floor(historyRef.current.length / colRef.current) % rowRef.current) + 1,
      questionSub: (historyRef.current.length % colRef.current) + 1,
    }),
    [historyRef],
  );
  const getInterviewHistory = useCallback(() => {
    let str = '';

    const printAllStrings = obj => {
      Object.values(obj).map(val => {
        if (typeof val === 'string') {
          str += `---\n\n${val}\n\n`;
        } else if (typeof val === 'object') {
          printAllStrings(val);
        }
        return null;
      });
    };

    for (let i = 0; i < historyRef.current.length; i += 1) {
      const questionType =
        questionTypeRef.current[Math.floor(i / (rowRef.current * colRef.current))];
      const questionMain = (Math.floor(i / colRef.current) % rowRef.current) + 1;
      const questionSub = (i % colRef.current) + 1;

      str += `> ${questionType.toUpperCase()}분야 ${questionMain}-${questionSub}번 문제, 해설, 사용자 답변, 피드백, 성적입니다.\n\n`;
      printAllStrings(historyRef.current[i]);
      str += '----------------------------------------\n\n';
    }

    return str;
  }, [historyRef]);

  /* Return */
  return {
    interviewHistoryRef: historyRef,
    initInterviewHistory,
    addInterviewHistory: addHistory,
    isQuestionMain,
    isInterviewDone,
    getQuestionMainHistory,
    getInterviewInfo,
    getInterviewHistory,
  };
}
