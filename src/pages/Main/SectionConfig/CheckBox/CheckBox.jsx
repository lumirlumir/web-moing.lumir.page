import React from 'react';
import PropTypes from 'prop-types';

import CompFontNeon from '@/components/CompFontNeon';

import './CheckBox.scss';

/**
 *
 * @returns CheckBox
 */
export default function CheckBox({ children, onChange, isChecked }) {
  /* Return */
  return (
    <CompFontNeon
      className="CheckBox"
      neonColor={isChecked ? 'banana' : 'black'}
      neonSize="s"
      fontFamily="Audiowide"
      fontSize="40px"
    >
      <label>
        <input type="checkbox" onChange={onChange} />
        <span>{children}</span>
      </label>
    </CompFontNeon>
  );
}
CheckBox.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
