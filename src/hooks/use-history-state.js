import { useCallback, useState } from 'react';

/**
 *
 * @returns
 */
export default function useHistoryState() {
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
}
