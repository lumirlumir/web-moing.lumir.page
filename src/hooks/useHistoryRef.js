import { useCallback, useRef } from 'react';

/**
 *
 * @returns
 */
const useHistoryRef = () => {
  /* Hooks */
  // useRef
  const historyRef = useRef([]);

  /* Func */
  const addHistory = useCallback(val => {
    historyRef.current.push(val);
  }, []);

  /* Return */
  return {
    historyRef,
    addHistory,
  };
};

export default useHistoryRef;
