/**
 * @fileoverview FooterR.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import NeonButton from '@/components/neon-button';
import CompFontNeon from '@/components/CompFontNeon';

import './FooterR.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Scenario, Interview, Timer } from '@/core/types';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `FooterR`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @param {Interview} props.interview
 * @param {Timer} props.timer
 * @returns {React.JSX.Element}
 */
export default function FooterR({ scenario, interview, timer }) {
  const { visibility, clickability } = scenario.getSectionObj().FooterR;
  const { submit } = interview;
  const { stopTimer } = timer;

  const onClick = () => {
    submit();
    stopTimer();
  };

  return (
    <footer
      className={`FooterR ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <NeonButton style={{ width: '60px', height: '60px' }} onClick={onClick}>
        <CompFontNeon neonColor="white">
          <IoIosCheckmarkCircleOutline size="39px" />
        </CompFontNeon>
      </NeonButton>
    </footer>
  );
}
