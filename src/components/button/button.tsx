/**
 * @fileoverview button
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonButton from '@/components/neon-button';
import NeonFont from '@/components/neon-font';

import type useScenario from '@/hooks/use-scenario';

import './button.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  type: 'HeaderL' | 'HeaderR' | 'FooterL' | 'FooterR';
  icon: React.ReactElement;
  hoverEffect?: boolean;
  scenario: ReturnType<typeof useScenario>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function Button({
  type,
  icon,
  hoverEffect,
  scenario,
  onClick,
}: Props): React.JSX.Element {
  const { visibility, clickability } = scenario.getSectionObj()[type];

  return (
    <div
      className={`${type} button ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <NeonButton
        hoverEffect={hoverEffect}
        style={{ width: '60px', height: '60px' }}
        onClick={onClick}
      >
        <NeonFont neonColor="white">{icon}</NeonFont>
      </NeonButton>
    </div>
  );
}
