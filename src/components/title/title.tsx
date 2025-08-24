/**
 * @fileoverview Heading.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonFont from '@/components/neon-font';
import useScenario from '@/hooks/use-scenario';

import './title.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function Heading({ scenario }: Props): React.JSX.Element {
  const { visibility } = scenario.getSectionObj().Heading;

  return (
    <div className={`Heading ${visibility ? '' : 'invisible'}`}>
      <div className="mock">
        <NeonFont neonColor="blue" neonSize="m" fontFamily="Pacifico" fontSize="50px">
          <h1>Mock</h1>
        </NeonFont>
      </div>
      <div className="interview">
        <NeonFont neonColor="purple" fontFamily="Audiowide" fontSize="100px">
          <h1>Interview</h1>
        </NeonFont>
      </div>
    </div>
  );
}
