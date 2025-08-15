import { useState } from 'react';

export default function useConfig() {
  /* Hooks */
  // useState
  const [configState, setConfigState] = useState({
    visibility: false,
    questionType: {
      cs: false,
      fe: false,
      be: false,
      db: false,
      oop: false,
    },
    questionMain: 0,
    questionSub: 0,
    timeLimit: 0,
  });

  /* Func */
  const handleConfigState = obj => {
    setConfigState(prevState => ({
      ...prevState,
      ...obj,
      questionType: {
        ...prevState.questionType,
        ...obj.questionType,
      },
    }));
  };
  const isConfigDone = () => {
    const { cs, fe, be, db, oop } = configState.questionType;
    const { questionMain, questionSub, timeLimit } = configState;

    return (cs || fe || be || db || oop) && questionMain && questionSub && timeLimit;
  };

  /* Return */
  return {
    configState,
    handleConfigState,
    isConfigDone,
  };
}
