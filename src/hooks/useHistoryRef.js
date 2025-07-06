import { useCallback, useRef } from 'react';

/**
 *
 * @returns
 */
export default function useHistoryRef() {
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
}
