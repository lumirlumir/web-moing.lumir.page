/**
 * @fileoverview app.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { useEffect } from 'react';
import { GoGear } from 'react-icons/go';
import { CiMicrophoneOn } from 'react-icons/ci';
import { GrPowerReset } from 'react-icons/gr';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import Button from '@/components/button';
import MainButton from '@/components/main-button';
import SectionClient from '@/components/section-client';
import SectionConfig from '@/components/section-config';
import SectionServer from '@/components/section-server';
import Timer from '@/components/timer';
import Title from '@/components/title';

import useScenario from '@/hooks/use-scenario';
import useConfig from '@/hooks/use-config';
import useInterview from '@/hooks/use-interview';
import useTimer from '@/hooks/use-timer';
import useScroll from '@/hooks/use-scroll';

import './app.scss';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function App(): React.JSX.Element {
  const scenario = useScenario();
  const config = useConfig();
  const interview = useInterview();
  const timer = useTimer(interview.submit);
  const { scrollRef, scroll } = useScroll<HTMLDivElement>();

  useEffect(() => {
    const timeout = setTimeout(scroll, 2000);
    return () => clearTimeout(timeout);
  }, [scenario.subsectionState, scroll]);

  return (
    <div className="app">
      <Button
        type="header-l"
        icon={<GoGear size="35px" />}
        scenario={scenario}
        onClick={() => {
          config.handleConfigState({ visibility: !config.configState.visibility });
        }}
      />
      <Button
        type="header-r"
        icon={<CiMicrophoneOn size="40px" />}
        hoverEffect={interview.listening}
        scenario={scenario}
        onClick={() => {
          interview.toggleListening();
        }}
      />
      <Button
        type="footer-l"
        icon={<GrPowerReset size="32px" />}
        scenario={scenario}
        onClick={() => {
          window.location.reload();
        }}
      />
      <Button
        type="footer-r"
        icon={<IoIosCheckmarkCircleOutline size="39px" />}
        scenario={scenario}
        onClick={() => {
          interview.submit();
          timer.stopTimer();
        }}
      />

      <Timer scenario={scenario} timer={timer} />

      <main className="main">
        <div ref={scrollRef}>
          <Title scenario={scenario} />
          <SectionServer
            scenario={scenario}
            config={config}
            interview={interview}
            timer={timer}
          />
          <SectionClient scenario={scenario} interview={interview} />
          <SectionConfig config={config} />
          <MainButton scenario={scenario} config={config} interview={interview} />
        </div>
      </main>
    </div>
  );
}
