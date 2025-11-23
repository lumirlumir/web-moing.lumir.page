/**
 * @fileoverview button.
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
  type: 'header-l' | 'header-r' | 'footer-l' | 'footer-r';
  icon: React.ReactElement;
  scenario: ReturnType<typeof useScenario>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Whether to apply a hover effect.
   * @default false
   */
  hoverEffect?: boolean;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function Button({
  type,
  icon,
  scenario,
  onClick,
  hoverEffect,
}: Props): React.JSX.Element {
  const { visibility, clickability } = scenario.getSectionObj()[type];

  return (
    <div
      className={`button transition ${type} ${visibility ? '' : 'invisible'} ${clickability ? '' : 'pointer-events-none'}`}
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
