import React from 'react';
import PropTypes from 'prop-types';

import CompFontNeon from '@/components/CompFontNeon';

import './ButtonCount.scss';

/**
 *
 * @returns ButtonCount
 */
export default function ButtonCount({ children, onClick, count }) {
  /* Return */
  return (
    <CompFontNeon
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
    </CompFontNeon>
  );
}
ButtonCount.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
