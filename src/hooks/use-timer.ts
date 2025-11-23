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
    // @ts-expect-error -- TODO
    if (secondState < 0) {
      // @ts-expect-error -- TODO
      clearInterval(intervalRef.current);
      setSecondState(null);
      if (callbackOnTimerEndRef.current) callbackOnTimerEndRef.current();
    }
  }, [secondState]);

  const resetTimer = useCallback(minute => {
    // @ts-expect-error -- TODO
    setSecondState(minute * 60);

    // @ts-expect-error -- TODO
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      // @ts-expect-error -- TODO
      setSecondState(prevSecond => prevSecond - 1);
    }, 1000);
  }, []);
  const stopTimer = useCallback(() => {
    // @ts-expect-error -- TODO
    clearInterval(intervalRef.current);
  }, []);
  const getTimer = useCallback(() => {
    // @ts-expect-error -- TODO
    const minute = String(Math.floor((secondState / 60) % 60)).padStart(2, '0');
    // @ts-expect-error -- TODO
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
