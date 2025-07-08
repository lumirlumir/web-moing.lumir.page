import React, { useEffect } from 'react';

import useScroll from '@/hooks/useScroll';
import {
  scenarioPropTypes,
  configPropTypes,
  interviewPropTypes,
  timerPropTypes,
} from '@/utils/propTypes';

import ButtonMain from './ButtonMain';
import Heading from './Heading';
import SectionConfig from './SectionConfig';
import SectionServer from './SectionServer';
import SectionClient from './SectionClient';

import './Main.scss';

/**
 *
 * @returns Main
 */
export default function Main({ scenario, config, interview, timer }) {
  /* Props */
  const { subsectionState } = scenario;

  /* Hooks */
  // useScroll
  const { scrollRef, scroll } = useScroll();
  // useEffect
  useEffect(() => {
    const timeout = setTimeout(scroll, 2000);
    return () => clearTimeout(timeout);
  }, [subsectionState, scroll]);

  /* Return */
  return (
    <main className="Main">
      <div ref={scrollRef}>
        <Heading scenario={scenario} />
        <SectionServer
          scenario={scenario}
          config={config}
          interview={interview}
          timer={timer}
        />
        <SectionClient scenario={scenario} interview={interview} />
        <SectionConfig config={config} />
        <ButtonMain scenario={scenario} config={config} interview={interview} />
      </div>
    </main>
  );
}
Main.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  config: configPropTypes.isRequired,
  interview: interviewPropTypes.isRequired,
  timer: timerPropTypes.isRequired,
};
