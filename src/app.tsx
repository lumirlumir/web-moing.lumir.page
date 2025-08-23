/**
 * @fileoverview app
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import { GrPowerReset } from 'react-icons/gr';
import { GoGear } from 'react-icons/go';

import Button from '@/components/button';
import useScenario from '@/hooks/use-scenario';
import useConfig from '@/hooks/use-config';
import useInterview from '@/hooks/use-interview';
import useTimer from '@/hooks/use-timer';

import FooterM from '@/pages/FooterM';
import FooterR from '@/pages/FooterR';
import HeaderR from '@/pages/HeaderR';
import Main from '@/pages/Main';

import './app.scss';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function App(): React.JSX.Element {
  const scenario = useScenario();
  const config = useConfig();
  const interview = useInterview();
  const timer = useTimer(interview.submit);

  return (
    <div className="app">
      <Button
        type="HeaderL"
        icon={<GoGear size="35px" />}
        scenario={scenario}
        onClick={() => {
          config.handleConfigState({ visibility: !config.configState.visibility });
        }}
      />
      <HeaderR scenario={scenario} interview={interview} />
      <Button
        type="FooterL"
        icon={<GrPowerReset size="32px" />}
        scenario={scenario}
        onClick={() => {
          window.location.reload();
        }}
      />
      <FooterR scenario={scenario} interview={interview} timer={timer} />
      <FooterM scenario={scenario} timer={timer} />

      <Main scenario={scenario} config={config} interview={interview} timer={timer} />
    </div>
  );
}
