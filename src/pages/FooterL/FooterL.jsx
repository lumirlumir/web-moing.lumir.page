/**
 * @fileoverview FooterL.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import { GrPowerReset } from 'react-icons/gr';

import NeonButton from '@/components/neon-button';
import CompFontNeon from '@/components/CompFontNeon';

import './FooterL.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Scenario } from '@/core/types';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `FooterL`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @returns {React.JSX.Element}
 */
export default function FooterL({ scenario }) {
  const { visibility, clickability } = scenario.getSectionObj().FooterL;

  const reload = () => {
    window.location.reload();
  };

  return (
    <footer
      className={`FooterL ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <NeonButton style={{ width: '60px', height: '60px' }} onClick={reload}>
        <CompFontNeon neonColor="white">
          <GrPowerReset size="32px" />
        </CompFontNeon>
      </NeonButton>
    </footer>
  );
}
