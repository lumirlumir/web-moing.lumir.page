import React from 'react';

import useScenario from '@/hooks/useScenario';
import useConfig from '@/hooks/useConfig';
import useInterview from '@/hooks/useInterview';
import useTimer from '@/hooks/useTimer';

import FooterL from '@/pages/FooterL';
import FooterM from '@/pages/FooterM';
import FooterR from '@/pages/FooterR';
import HeaderL from '@/pages/HeaderL';
import HeaderR from '@/pages/HeaderR';
import Main from '@/pages/Main';

import './App.scss';

/**
 *
 * @returns App
 */
export default function App() {
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
