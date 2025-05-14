import React from 'react';

import useScenario from '@/hooks/scenario/useScenario';
import useConfig from '@/hooks/useConfig';
import useInterview from '@/hooks/useInterview';
import useTimer from '@/hooks/useTimer';

import FooterL from './FooterL';
import FooterM from './FooterM';
import FooterR from './FooterR';
import HeaderL from './HeaderL';
import HeaderR from './HeaderR';
import Main from './Main';

import './Start.scss';

/**
 *
 * @returns Start
 */
function Start() {
  /* Hooks */
  const scenario = useScenario();
  const config = useConfig();
  const interview = useInterview();
  const timer = useTimer(interview.submit);

  /* Return */
  return (
    <div className="Start">
      <HeaderL scenario={scenario} config={config} />
      <HeaderR scenario={scenario} interview={interview} />
      <Main scenario={scenario} config={config} interview={interview} timer={timer} />
      <FooterL scenario={scenario} />
      <FooterM scenario={scenario} timer={timer} />
      <FooterR scenario={scenario} interview={interview} timer={timer} />
    </div>
  );
}

export default Start;
