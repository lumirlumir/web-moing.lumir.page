import React from 'react';

import NeonFont from '@/components/neon-font';

import './ButtonCount.scss';

/**
 * Component `ButtonCount`.
 * @param {object} props
 * @returns {React.JSX.Element}
 */
export default function ButtonCount({ children, onClick, count }) {
  return (
    <NeonFont
      className={`ButtonCount ${count >= 1 ? '' : 'off'}`}
      neonColor={count >= 1 ? 'banana' : 'black'}
      neonSize="s"
      fontFamily="Audiowide"
      fontSize="40px"
    >
      <label>
        <input type="button" onClick={onClick} />
        <span>{children}</span>
        <span>{count}</span>
      </label>
    </NeonFont>
  );
}
