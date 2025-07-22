/**
 * @fileoverview HeaderL.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import { GoGear } from 'react-icons/go';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './HeaderL.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Scenario, Config } from '@/core/types';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `HeaderL`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @param {Config} props.config
 * @returns {React.JSX.Element}
 */
export default function HeaderL({ scenario, config }) {
  const { visibility, clickability } = scenario.getSectionObj().HeaderL;
  const { configState, handleConfigState } = config;

  return (
    <header
      className={`HeaderL ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <CompButtonLight
        style={{ width: '60px', height: '60px' }}
        onClick={() => {
          handleConfigState({ visibility: !configState.visibility });
        }}
      >
        <CompFontNeon neonColor="white">
          <GoGear size="35px" />
        </CompFontNeon>
      </CompButtonLight>
    </header>
  );
}
