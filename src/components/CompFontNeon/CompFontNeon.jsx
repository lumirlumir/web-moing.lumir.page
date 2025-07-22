import React from 'react';

import './CompFontNeon.scss';

/**
 * Component Font Neon
 *
 * @component React component
 * @param {object} props children, className, neonColor, neonSize, fontFamily, fontSize
 * @param {React.ReactNode} [props.children] node. type texts or SVG you want to render
 * @param {string} [props.className] string. you can add more class names
 * @param {string} [props.neonColor] string. select among 'red', 'brightOrange', 'orange', 'banana', 'yellow', 'green', 'sky', 'blue', 'violet', 'purple', 'silver', 'white', 'black'
 * @param {string} [props.neonSize] string. select among 'xl', 'l', 'm', 's', 'xs'
 * @param {string} [props.fontFamily] string. type fontFamily you want to render
 * @param {string} [props.fontSize] string. type fontSize you want to render
 * @returns {React.JSX.Element} Component Font Neon
 *
 * @example
 * //Default Values
 * <CompFontNeon className="" neonColor="red" neonSize='l' fontFamily="unset" fontSize="unset">
 *   null
 * </CompFontNeon>
 */
export default function CompFontNeon({
  children = null,
  className = '',
  neonColor = 'red',
  neonSize = 'l',
  fontFamily = 'unset',
  fontSize = 'unset',
} = {}) {
  const style = {
    fontFamily,
    fontSize,
  };

  return (
    <span
      style={style}
      className={`${className} CompFontNeon ${neonColor}Color ${neonSize}`}
    >
      {children}
    </span>
  );
}
