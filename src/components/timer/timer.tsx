/**
 * @fileoverview timer.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonFont from '@/components/neon-font';
import useScenario from '@/hooks/use-scenario';
import useTimer from '@/hooks/use-timer';

import './timer.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  timer: ReturnType<typeof useTimer>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function Timer({ scenario, timer }: Props): React.JSX.Element {
  const { visibility } = scenario.getSectionObj().timer;
  const { getTimer } = timer;

  return (
    <footer className={`timer transition ${visibility ? '' : 'invisible'}`}>
      <NeonFont
        neonColor={getTimer().minute === 0 ? 'red' : 'white'}
        neonSize="s"
        style={{
          fontFamily: 'Audiowide',
          fontSize: '35px',
        }}
      >
        {getTimer().timer}
      </NeonFont>
    </footer>
  );
}
