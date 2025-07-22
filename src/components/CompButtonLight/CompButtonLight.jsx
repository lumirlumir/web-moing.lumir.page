import React from 'react';

import './CompButtonLight.scss';

/**
 * Component Button Light
 *
 * @component React component
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {object} [props.style]
 * @param {Function} [props.onClick]
 * @param {string} [props.neonSize]
 * @param {boolean} [props.hoverEffect]
 * @returns {React.JSX.Element}
 *
 * @example
 * //Default Values
 * <CompButtonLight style={null} onClick={() => {}} neonSize="2px" hoverEffect={false}>
 *   null
 * </CompButtonLight>
 */
export default function CompButtonLight({
  children = null,
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
      {/* @ts-expect-error -- TODO */}
      <button type="button" style={style} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
