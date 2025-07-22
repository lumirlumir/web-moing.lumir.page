/**
 * @fileoverview Main.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { useEffect } from 'react';

import useScroll from '@/hooks/useScroll';

import ButtonMain from './ButtonMain';
import Heading from './Heading';
import SectionConfig from './SectionConfig';
import SectionServer from './SectionServer';
import SectionClient from './SectionClient';

import './Main.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Scenario, Config, Interview, Timer } from '@/core/types';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `Main`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @param {Config} props.config
 * @param {Interview} props.interview
 * @param {Timer} props.timer
 * @returns {React.JSX.Element}
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
