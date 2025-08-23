/**
 * @fileoverview HeaderL.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import { GoGear } from 'react-icons/go';

import NeonButton from '@/components/neon-button';
import NeonFont from '@/components/neon-font';
import useConfig from '@/hooks/use-config';
import useScenario from '@/hooks/use-scenario';

import './HeaderL.scss';

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  config: ReturnType<typeof useConfig>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function HeaderL({ scenario, config }: Props): React.JSX.Element {
  const { visibility, clickability } = scenario.getSectionObj().HeaderL;
  const { configState, handleConfigState } = config;

  return (
    <header
      className={`HeaderL ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <NeonButton
        style={{ width: '60px', height: '60px' }}
        onClick={() => {
          handleConfigState({ visibility: !configState.visibility });
        }}
      >
        <NeonFont neonColor="white">
          <GoGear size="35px" />
        </NeonFont>
      </NeonButton>
    </header>
  );
}
