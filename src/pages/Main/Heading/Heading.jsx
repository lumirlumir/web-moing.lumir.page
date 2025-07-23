/**
 * @fileoverview Heading.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import CompFontNeon from '@/components/CompFontNeon';

import './Heading.scss';

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
 * Component `Heading`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @returns {React.JSX.Element}
 */
export default function Heading({ scenario }) {
  const { visibility } = scenario.getSectionObj().Main.Heading;

  return (
    <div className={`Heading ${visibility ? '' : 'invisible'}`}>
      <div className="mock">
        <CompFontNeon neonColor="blue" neonSize="m" fontFamily="Pacifico" fontSize="50px">
          <h1>Mock</h1>
        </CompFontNeon>
      </div>
      <div className="interview">
        <CompFontNeon neonColor="purple" fontFamily="Audiowide" fontSize="100px">
          <h1>Interview</h1>
        </CompFontNeon>
      </div>
    </div>
  );
}
