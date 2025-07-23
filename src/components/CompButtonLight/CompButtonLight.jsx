/**
 * @fileoverview CompButtonLight.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import './CompButtonLight.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {object} Props
 * @property {React.CSSProperties} [style] Default: `{}`
 * @property {React.MouseEventHandler<HTMLButtonElement>} [onClick] Default: `() => {}`
 * @property {string} [neonSize] Default: `'2px'`
 * @property {boolean} [hoverEffect] Default: `false`
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `CompButtonLight`.
 * @param {React.PropsWithChildren<Props>} props
 * @returns {React.JSX.Element}
 * @example
 * //Default Values
 * <CompButtonLight style={{}} onClick={() => {}} neonSize="2px" hoverEffect={false}>
 *   {undefined}
 * </CompButtonLight>
 */
export default function CompButtonLight({
  children = undefined,
  style = {},
  onClick = () => {},
  neonSize = '2px',
  hoverEffect = false,
} = {}) {
  return (
    <div className={`CompButtonLight ${hoverEffect ? 'hover' : ''}`}>
      <span style={{ height: neonSize }} />
      <span style={{ width: neonSize }} />
      <span style={{ height: neonSize }} />
      <span style={{ width: neonSize }} />
      <button type="button" style={style} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
