/**
 * @fileoverview FooterM.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonFont from '@/components/neon-font';
import useScenario from '@/hooks/use-scenario';
import useTimer from '@/hooks/use-timer';

import './FooterM.scss';

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

export default function FooterM({ scenario, timer }: Props): React.JSX.Element {
  const { visibility } = scenario.getSectionObj().FooterM;
  const { getTimer } = timer;

  return (
    <footer className={`FooterM ${visibility ? '' : 'invisible'}`}>
      <NeonFont
        neonColor={getTimer().minute === 0 ? 'red' : 'white'}
        neonSize="s"
        fontFamily="audiowide"
        fontSize="35px"
      >
        {getTimer().timer}
      </NeonFont>
    </footer>
  );
}
