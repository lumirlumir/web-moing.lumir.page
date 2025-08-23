/**
 * @fileoverview FooterR.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import NeonButton from '@/components/neon-button';
import NeonFont from '@/components/neon-font';
import useScenario from '@/hooks/use-scenario';
import useInterview from '@/hooks/use-interview';
import useTimer from '@/hooks/use-timer';

import './FooterR.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  interview: ReturnType<typeof useInterview>;
  timer: ReturnType<typeof useTimer>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function FooterR({
  scenario,
  interview,
  timer,
}: Props): React.JSX.Element {
  const { visibility, clickability } = scenario.getSectionObj().FooterR;
  const { submit } = interview;
  const { stopTimer } = timer;

  const onClick = () => {
    submit();
    stopTimer();
  };

  return (
    <footer
      className={`FooterR ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <NeonButton style={{ width: '60px', height: '60px' }} onClick={onClick}>
        <NeonFont neonColor="white">
          <IoIosCheckmarkCircleOutline size="39px" />
        </NeonFont>
      </NeonButton>
    </footer>
  );
}
