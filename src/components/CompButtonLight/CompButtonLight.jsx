import React from 'react';
import PropTypes from 'prop-types';

import './CompButtonLight.scss';

/**
 * Component Button Light
 *
 * @component React component
 * @param {object} props children, style, onClick, neonSize
 * @param {node} props.children node
 * @param {object} props.style object
 * @param {function} props.onClick function
 * @param {string} props.neonSize string
 * @param {boolean} props.hoverEffect boolean
 * @returns {React.JSX.Element} Component Button Light
 *
 * @example
 * //Default Values
 * <CompButtonLight style={null} onClick={() => {}} neonSize="2px" hoverEffect={false}>
 *   null
 * </CompButtonLight>
 */
export default function CompButtonLight({
  children,
  style,
  onClick,
  neonSize,
  hoverEffect,
}) {
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
CompButtonLight.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
  neonSize: PropTypes.string,
  hoverEffect: PropTypes.bool,
};
CompButtonLight.defaultProps = {
  children: null,
  style: null,
  onClick: () => {},
  neonSize: '2px',
  hoverEffect: false,
};
