/**
 * @fileoverview section-client.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonDiv from '@/components/neon-div';
import useScenario from '@/hooks/use-scenario';
import useInterview from '@/hooks/use-interview';

import './section-client.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  interview: ReturnType<typeof useInterview>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function SectionClient({ scenario, interview }: Props): React.JSX.Element {
  const { visibility } = scenario.getSectionObj()['section-client'];
  const { contentRef } = interview;

  return (
    <NeonDiv
      className={`section-client transition ${visibility ? '' : 'invisible'}`}
      neonColor="black"
    >
      <div
        ref={contentRef}
        contentEditable="true"
        spellCheck="false"
        data-placeholder="$ Interviewee"
      />
    </NeonDiv>
  );
}
