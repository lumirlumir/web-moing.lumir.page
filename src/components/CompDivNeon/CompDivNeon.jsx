import React from 'react';
import PropTypes from 'prop-types';

import './CompDivNeon.scss';

/**
 * Component Div Neon
 *
 * @component React component
 * @param {object} props children, className, neonColor, neonSize, borderWidth
 * @param {node} props.children node
 * @param {string} props.className string. you can add more class names
 * @param {string} props.neonColor string. select among 'red', 'brightOrange', 'orange', 'banana', 'yellow', 'green', 'sky', 'blue', 'violet', 'purple', 'silver', 'white', 'black'
 * @param {string} props.neonSize string. select among 'xl', 'l', 'm', 's', 'xs'
 * @param {string} props.borderWidth string. type borderWidth you want to render
 * @returns {React.JSX.Element} Component Div Neon
 *
 * @example
 * //Default Values
 * <CompDivNeon className="" neonColor="red" neonSize="l" borderWidth="2px">
 *   null
 * </CompDivNeon>
 */
export default function CompDivNeon({
  children,
  className,
  neonColor,
  neonSize,
  borderWidth,
}) {
  const style = {
    borderWidth,
  };

  return (
    <div
      style={style}
      className={`${className} CompDivNeon ${neonColor}Color ${neonSize}`}
    >
      {children}
    </div>
  );
}
CompDivNeon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  neonColor: PropTypes.oneOf([
    'red',
    'brightOrange',
    'orange',
    'banana',
    'yellow',
    'green',
    'sky',
    'blue',
    'violet',
    'purple',
    'silver',
    'white',
    'black',
  ]),
  neonSize: PropTypes.oneOf(['xl', 'l', 'm', 's', 'xs']),
  borderWidth: PropTypes.string,
};
CompDivNeon.defaultProps = {
  children: null,
  className: '',
  neonColor: 'red',
  neonSize: 'l',
  borderWidth: null,
};
