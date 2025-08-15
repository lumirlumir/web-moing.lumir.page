/**
 * @fileoverview SectionClient.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonDiv from '@/components/neon-div';

import './SectionClient.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Scenario, Interview } from '@/core/types';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `SectionClient`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @param {Interview} props.interview
 * @returns {React.JSX.Element}
 */
export default function SectionClient({ scenario, interview }) {
  const { visibility } = scenario.getSectionObj().Main.SectionClient;
  const { contentRef } = interview;

  return (
    <NeonDiv
      className={`SectionClient ${visibility ? '' : 'invisible'}`}
      neonColor="black"
    >
      <div
        // @ts-expect-error -- TODO: Fix type error
        ref={contentRef}
        contentEditable="true"
        spellCheck="false"
        placeholder="$ Interviewee"
      />
    </NeonDiv>
  );
}
