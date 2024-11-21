import React from 'react';
import { GrPowerReset } from 'react-icons/gr';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes } from '@/utils/propTypes';

import './FooterL.scss';

/**
 *
 * @returns FooterL
 */
function FooterL({ scenario }) {
  /* Props */
  const { visibility, clickability } = scenario.getSubsectionObj().FooterL;

  /* Func */
  const reload = () => {
    window.location.reload();
  };

  /* Return */
  return (
    <footer
      className={`FooterL ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}
    >
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={reload}>
        <CompFontNeon neonColor="white">
          <GrPowerReset size="32px" />
        </CompFontNeon>
      </CompButtonLight>
    </footer>
  );
}
FooterL.propTypes = {
  scenario: scenarioPropTypes.isRequired,
};
FooterL.defaultProps = {};

export default FooterL;
