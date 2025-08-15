import { useCallback, useEffect, useRef, useState } from 'react';

/**
 *
 * @param {function} callbackOnTimerEnd
 * @returns
 */
export default function useTimer(callbackOnTimerEnd) {
  /* Hooks */
  // useRef
  const callbackOnTimerEndRef = useRef(callbackOnTimerEnd);
  const intervalRef = useRef(null);
  // useState
  const [secondState, setSecondState] = useState(null);
  // useEffect
  useEffect(() => {
    if (secondState < 0) {
      clearInterval(intervalRef.current);
      setSecondState(null);
      if (callbackOnTimerEndRef.current) callbackOnTimerEndRef.current();
    }
  }, [secondState]);

  /* Func */
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

  /* Return */
  return {
    resetTimer,
    stopTimer,
    getTimer,
  };
}
