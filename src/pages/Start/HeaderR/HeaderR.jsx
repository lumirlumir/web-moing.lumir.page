import React from 'react';
import { CiMicrophoneOn } from 'react-icons/ci';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, interviewPropTypes } from '@/utils/propTypes';

import './HeaderR.scss';

/**
 *
 * @returns HeaderR
 */
function HeaderR({ scenario, interview }) {
  /* Props */
  const { visibility, clickability } = scenario.getSectionObj().HeaderR;
  const { listening, toggleListening } = interview;

  /* Function */
  const onClick = () => {
    toggleListening();
  };

  /* Return */
  return (
    <header
      className={`HeaderR ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <CompButtonLight
        style={{ width: '60px', height: '60px' }}
        onClick={onClick}
        hoverEffect={listening}
      >
        <CompFontNeon neonColor="white">
          <CiMicrophoneOn size="40px" />
        </CompFontNeon>
      </CompButtonLight>
    </header>
  );
}
HeaderR.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  interview: interviewPropTypes.isRequired,
};
HeaderR.defaultProps = {};

export default HeaderR;
