import React from 'react';

import CompFontNeon from '@/components/CompFontNeon';

import './CheckBox.scss';

/**
 * Component `CheckBox`.
 * @param {object} props
 * @returns {React.JSX.Element}
 */
export default function CheckBox({ children, onChange, isChecked }) {
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
