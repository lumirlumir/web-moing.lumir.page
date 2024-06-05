import React, { useEffect } from 'react';

import useScroll from '@/hooks/utils/useScroll';
import { scenarioPropTypes, configPropTypes, interviewPropTypes } from '@/utils/propTypes';

import ButtonMain from './ButtonMain';
import Heading from './Heading';
import SectionConfig from './SectionConfig';
import SectionResult from './SectionResult';
import SectionServer from './SectionServer';
import SectionClient from './SectionClient';

import './Main.scss';

/**
 *
 * @returns Main
 */
function Main({ scenario, config, interview }) {
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
        <SectionServer scenario={scenario} config={config} interview={interview} />
        <SectionClient scenario={scenario} interview={interview} />
        <SectionConfig config={config} />
        <SectionResult />
        <ButtonMain scenario={scenario} config={config} interview={interview} />
      </div>
    </main>
  );
}
Main.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  config: configPropTypes.isRequired,
  interview: interviewPropTypes.isRequired,
};
Main.defaultProps = {};

export default Main;
