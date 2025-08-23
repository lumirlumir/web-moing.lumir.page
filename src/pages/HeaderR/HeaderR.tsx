/**
 * @fileoverview HeaderR.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import { CiMicrophoneOn } from 'react-icons/ci';

import NeonButton from '@/components/neon-button';
import NeonFont from '@/components/neon-font';
import useScenario from '@/hooks/use-scenario';
import useInterview from '@/hooks/use-interview';

import './HeaderR.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  interview: ReturnType<typeof useInterview>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function HeaderR({ scenario, interview }: Props): React.JSX.Element {
  const { visibility, clickability } = scenario.getSectionObj().HeaderR;
  const { listening, toggleListening } = interview;

  const onClick = () => {
    toggleListening();
  };

  return (
    <header
      className={`HeaderR ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <NeonButton
        style={{ width: '60px', height: '60px' }}
        onClick={onClick}
        hoverEffect={listening}
      >
        <NeonFont neonColor="white">
          <CiMicrophoneOn size="40px" />
        </NeonFont>
      </NeonButton>
    </header>
  );
}
