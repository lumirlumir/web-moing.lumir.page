import React from 'react';

import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, timerPropTypes } from '@/utils/propTypes';

import './FooterM.scss';

/**
 *
 * @returns FooterM
 */
export default function FooterM({ scenario, timer }) {
  /* Props */
  const { visibility } = scenario.getSectionObj().FooterM;
  const { getTimer } = timer;

  /* Return */
  return (
    <footer className={`FooterM ${visibility ? '' : 'invisible'}`}>
      <CompFontNeon
        neonColor={getTimer().minute === 0 ? 'red' : 'white'}
        neonSize="s"
        fontFamily="audiowide"
        fontSize="35px"
      >
        {getTimer().timer}
      </CompFontNeon>
    </footer>
  );
}
FooterM.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  timer: timerPropTypes.isRequired,
};
FooterM.defaultProps = {};
