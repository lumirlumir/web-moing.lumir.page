/**
 * @fileoverview Main.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { useEffect } from 'react';

import useScenario from '@/hooks/use-scenario';
import useConfig from '@/hooks/use-config';
import useInterview from '@/hooks/use-interview';
import useTimer from '@/hooks/use-timer';
import useScroll from '@/hooks/use-scroll';

import ButtonMain from './ButtonMain';
import Heading from './Heading';
import SectionConfig from './SectionConfig';
import SectionServer from './SectionServer';
import SectionClient from './SectionClient';

import './Main.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  config: ReturnType<typeof useConfig>;
  interview: ReturnType<typeof useInterview>;
  timer: ReturnType<typeof useTimer>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function Main({
  scenario,
  config,
  interview,
  timer,
}: Props): React.JSX.Element {
  const { subsectionState } = scenario;
  const { scrollRef, scroll } = useScroll<HTMLDivElement>();

  useEffect(() => {
    const timeout = setTimeout(scroll, 2000);
    return () => clearTimeout(timeout);
  }, [subsectionState, scroll]);

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
