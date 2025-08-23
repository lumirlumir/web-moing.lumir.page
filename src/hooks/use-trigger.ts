import { useCallback, useState } from 'react';

/**
 *
 * @returns
 */
export default function useTrigger() {
  /* Hooks */
  // useState
  const [triggerState, setTriggerState] = useState(false);

  /* Func */
  const trigger = useCallback(() => {
    setTriggerState(true);
  }, []);

  /* Return */
  return {
    triggerState,
    trigger,
  };
}
