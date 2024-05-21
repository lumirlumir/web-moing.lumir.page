import React from 'react';
import PropTypes from 'prop-types';
import { CiMicrophoneOn } from 'react-icons/ci';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './HeaderR.scss';

/**
 *
 * @returns HeaderR
 */
function HeaderR({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState, isScenarioPhaseEnd } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState].HeaderR;

  /* Function */
  const doNothing = () => {};

  /* Return */
  return (
    <header className={`HeaderR ${visibility ? '' : 'off'} ${isScenarioPhaseEnd() ? '' : 'clickDisabled'}`}>
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={doNothing}>
        <CompFontNeon neonColor="white">
          <CiMicrophoneOn size="40px" />
        </CompFontNeon>
      </CompButtonLight>
    </header>
  );
}
HeaderR.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    isScenarioPhaseEnd: PropTypes.func,
  }).isRequired,
};
HeaderR.defaultProps = {};

export default HeaderR;