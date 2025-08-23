/**
 * @fileoverview FooterM.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonFont from '@/components/neon-font';

import './FooterM.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Scenario, Timer } from '@/core/types';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `FooterM`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @param {Timer} props.timer
 * @returns {React.JSX.Element}
 */
export default function FooterM({ scenario, timer }) {
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
