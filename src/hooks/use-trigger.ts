/**
 * @fileoverview use-trigger
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { useCallback, useState } from 'react';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function useTrigger() {
  const [triggerState, setTriggerState] = useState<boolean>(false);

  const trigger = useCallback(() => {
    setTriggerState(true);
  }, []);

  return {
    triggerState,
    trigger,
  };
}
