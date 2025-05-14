import React from 'react';

import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes } from '@/utils/propTypes';

import './Heading.scss';

/**
 *
 * @returns Heading
 */
function Heading({ scenario }) {
  /* Props */
  const { visibility } = scenario.getSectionObj().Main.Heading;

  /* Return */
  return (
    <div className={`Heading ${visibility ? '' : 'invisible'}`}>
      <div className="mock">
        <CompFontNeon neonColor="blue" neonSize="m" fontFamily="Pacifico" fontSize="50px">
          <h1>Mock</h1>
        </CompFontNeon>
      </div>
      <div className="interview">
        <CompFontNeon neonColor="purple" fontFamily="Audiowide" fontSize="100px">
          <h1>Interview</h1>
        </CompFontNeon>
      </div>
    </div>
  );
}
Heading.propTypes = {
  scenario: scenarioPropTypes.isRequired,
};
Heading.defaultProps = {};

export default Heading;
