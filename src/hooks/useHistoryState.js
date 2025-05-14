import { useCallback, useState } from 'react';

/**
 *
 * @returns
 */
const useHistoryState = () => {
  /* Hooks */
  // useState
  const [historyState, setHistoryState] = useState([]);

  /* Func */
  const addHistory = useCallback(val => {
    setHistoryState(prevState => [...prevState, val]);
  }, []);

  /* Return */
  return {
    historyState,
    addHistory,
  };
};

export default useHistoryState;
