/**
 * @fileoverview footer-l
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import { GrPowerReset } from 'react-icons/gr';

import NeonButton from '@/components/neon-button';
import NeonFont from '@/components/neon-font';

import type { Scenario } from '@/core/types';

import './footer-l.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: Scenario;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function FooterL({ scenario }: Props): React.JSX.Element {
  const { visibility, clickability } = scenario.getSectionObj().FooterL;

  return (
    <footer
      className={`footer-l ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <NeonButton
        style={{ width: '60px', height: '60px' }}
        onClick={() => {
          window.location.reload();
        }}
      >
        <NeonFont neonColor="white">
          <GrPowerReset size="32px" />
        </NeonFont>
      </NeonButton>
    </footer>
  );
}
