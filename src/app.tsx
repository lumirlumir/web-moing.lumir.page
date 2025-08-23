/**
 * @fileoverview app
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import { GoGear } from 'react-icons/go';
import { CiMicrophoneOn } from 'react-icons/ci';
import { GrPowerReset } from 'react-icons/gr';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import Button from '@/components/button';
import Timer from '@/components/timer';
import useScenario from '@/hooks/use-scenario';
import useConfig from '@/hooks/use-config';
import useInterview from '@/hooks/use-interview';
import useTimer from '@/hooks/use-timer';

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
      <Button
        type="HeaderR"
        icon={<CiMicrophoneOn size="40px" />}
        hoverEffect={interview.listening}
        scenario={scenario}
        onClick={() => {
          interview.toggleListening();
        }}
      />
      <Button
        type="FooterL"
        icon={<GrPowerReset size="32px" />}
        scenario={scenario}
        onClick={() => {
          window.location.reload();
        }}
      />
      <Button
        type="FooterR"
        icon={<IoIosCheckmarkCircleOutline size="39px" />}
        scenario={scenario}
        onClick={() => {
          interview.submit();
          timer.stopTimer();
        }}
      />

      <Timer scenario={scenario} timer={timer} />

      <Main scenario={scenario} config={config} interview={interview} timer={timer} />
    </div>
  );
}
