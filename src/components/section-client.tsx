/**
 * @fileoverview section-client.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import NeonDiv from '@/components/neon-div';
import useScenario from '@/hooks/use-scenario';
import useInterview from '@/hooks/use-interview';
import { cn } from '@/utils';

import './section-client.scss';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  interview: ReturnType<typeof useInterview>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function SectionClient({ scenario, interview }: Props) {
  const { visibility } = scenario.getSectionObj()['section-client'];
  const { contentRef } = interview;

  return (
    <NeonDiv
      className={cn('section-client', 'transition', visibility || 'invisible')}
      neonColor="black"
    >
      <div
        // @ts-expect-error -- TODO
        ref={contentRef}
        contentEditable="true"
        spellCheck="false"
        data-placeholder="$ Interviewee"
      />
    </NeonDiv>
  );
}
