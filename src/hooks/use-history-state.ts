/**
 * @fileoverview use-history-state
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { useCallback, useState } from 'react';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function useHistoryState<T>() {
  const [historyState, setHistoryState] = useState<T[]>([]);

  const addHistory = useCallback((val: T) => {
    setHistoryState(prevState => [...prevState, val]);
  }, []);

  return {
    historyState,
    addHistory,
  };
}
