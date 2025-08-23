/**
 * @fileoverview app.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import useScenario from '@/hooks/use-scenario';
import useConfig from '@/hooks/use-config';
import useInterview from '@/hooks/use-interview';
import useTimer from '@/hooks/use-timer';

import FooterL from '@/pages/footer-l';
import FooterM from '@/pages/FooterM';
import FooterR from '@/pages/FooterR';
import HeaderL from '@/pages/HeaderL';
import HeaderR from '@/pages/HeaderR';
import Main from '@/pages/Main';

import './app.scss';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Compoenent `App`.
 */
export default function App(): React.JSX.Element {
  const scenario = useScenario();
  const config = useConfig();
  const interview = useInterview();
  const timer = useTimer(interview.submit);

  return (
    <div className="app">
      <HeaderL scenario={scenario} config={config} />
      <HeaderR scenario={scenario} interview={interview} />
      <Main scenario={scenario} config={config} interview={interview} timer={timer} />
      <FooterL scenario={scenario} />
      <FooterM scenario={scenario} timer={timer} />
      <FooterR scenario={scenario} interview={interview} timer={timer} />
    </div>
  );
}
