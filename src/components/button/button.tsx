/**
 * @fileoverview button
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonButton from '@/components/neon-button';
import NeonFont from '@/components/neon-font';
import useScenario from '@/hooks/use-scenario';

import './button.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  type: 'HeaderL' | 'HeaderR' | 'FooterL' | 'FooterR';
  Icon: React.ReactElement;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function Button({
  scenario,
  type,
  Icon,
  onClick,
}: Props): React.JSX.Element {
  const { visibility, clickability } = scenario.getSectionObj()[type];

  return (
    <div
      className={`${type} button ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <NeonButton style={{ width: '60px', height: '60px' }} onClick={onClick}>
        <NeonFont neonColor="white">{Icon}</NeonFont>
      </NeonButton>
    </div>
  );
}
