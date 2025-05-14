import React from 'react';
import { GoGear } from 'react-icons/go';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, configPropTypes } from '@/utils/propTypes';

import './HeaderL.scss';

/**
 *
 * @returns HeaderL
 */
function HeaderL({ scenario, config }) {
  /* Props */
  const { visibility, clickability } = scenario.getSectionObj().HeaderL;
  const { configState, handleConfigState } = config;

  /* Return */
  return (
    <header
      className={`HeaderL ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <CompButtonLight
        style={{ width: '60px', height: '60px' }}
        onClick={() => {
          handleConfigState({ visibility: !configState.visibility });
        }}
      >
        <CompFontNeon neonColor="white">
          <GoGear size="35px" />
        </CompFontNeon>
      </CompButtonLight>
    </header>
  );
}
HeaderL.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  config: configPropTypes.isRequired,
};
HeaderL.defaultProps = {};

export default HeaderL;
