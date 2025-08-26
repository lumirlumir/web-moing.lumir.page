import { useCallback, useState } from 'react';

/**
 *
 * @returns
 */
export default function useHistoryState() {
  const [historyState, setHistoryState] = useState([]);

  const addHistory = useCallback(val => {
    setHistoryState(prevState => [...prevState, val]);
  }, []);

  return {
    historyState,
    addHistory,
  };
}
