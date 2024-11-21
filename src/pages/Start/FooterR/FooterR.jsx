import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, interviewPropTypes, timerPropTypes } from '@/utils/propTypes';

import './FooterR.scss';

/**
 *
 * @returns FooterR
 */
function FooterR({ scenario, interview, timer }) {
  /* Props */
  const { visibility, clickability } = scenario.getSubsectionObj().FooterR;
  const { submit } = interview;
  const { stopTimer } = timer;

  /* Function */
  const onClick = () => {
    submit();
    stopTimer();
  };

  /* Return */
  return (
    <footer
      className={`FooterR ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={onClick}>
        <CompFontNeon neonColor="white">
          <IoIosCheckmarkCircleOutline size="39px" />
        </CompFontNeon>
      </CompButtonLight>
    </footer>
  );
}
FooterR.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  interview: interviewPropTypes.isRequired,
  timer: timerPropTypes.isRequired,
};
FooterR.defaultProps = {};

export default FooterR;
