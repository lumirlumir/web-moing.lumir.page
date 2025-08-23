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

import './HeaderR.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Scenario, Interview } from '@/core/types';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `HeaderR`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @param {Interview} props.interview
 * @returns {React.JSX.Element}
 */
export default function HeaderR({ scenario, interview }) {
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
