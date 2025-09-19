/**
 * @fileoverview use-timer
 */

/* global NodeJS */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { useCallback, useEffect, useRef, useState } from 'react';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function useTimer(callbackOnTimerEnd: Function) {
  const callbackOnTimerEndRef = useRef(callbackOnTimerEnd);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [secondState, setSecondState] = useState(null);

  useEffect(() => {
    if (secondState < 0) {
      clearInterval(intervalRef.current);
      setSecondState(null);
      if (callbackOnTimerEndRef.current) callbackOnTimerEndRef.current();
    }
  }, [secondState]);

  const resetTimer = useCallback(minute => {
    setSecondState(minute * 60);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSecondState(prevSecond => prevSecond - 1);
    }, 1000);
  }, []);
  const stopTimer = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);
  const getTimer = useCallback(() => {
    const minute = String(Math.floor((secondState / 60) % 60)).padStart(2, '0');
    const second = String(Math.floor(secondState % 60)).padStart(2, '0');
    return {
      minute: Number(minute),
      second: Number(second),
      timer: `${minute} : ${second}`,
    };
  }, [secondState]);

  return {
    resetTimer,
    stopTimer,
    getTimer,
  };
}
