/**
 * @fileoverview neon-font
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import './neon-font.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  /**
   * Additional class names for the component.
   * @default ''
   */
  className?: string;

  /**
   * Neon color for the component.
   * @default 'red'
   */
  neonColor?:
    | 'red'
    | 'brightOrange'
    | 'orange'
    | 'banana'
    | 'yellow'
    | 'green'
    | 'sky'
    | 'blue'
    | 'violet'
    | 'purple'
    | 'silver'
    | 'white'
    | 'black';

  /**
   * Neon size for the component.
   * @default 'l'
   */
  neonSize?: 'xl' | 'l' | 'm' | 's' | 'xs';

  /**
   * Font family for the component.
   * @default 'unset'
   */
  fontFamily?: string;

  /**
   * Font size for the component.
   * @default 'unset'
   */
  fontSize?: string;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `NeonFont`.
 * @example
 * //Default Values
 * <NeonFont className="" neonColor="red" neonSize='l' fontFamily="unset" fontSize="unset">
 *   {undefined}
 * </NeonFont>
 */
export default function NeonFont({
  children,
  className = '',
  neonColor = 'red',
  neonSize = 'l',
  fontFamily = 'unset',
  fontSize = 'unset',
  ...props
}: React.PropsWithChildren<Props> = {}): React.JSX.Element {
  return (
    <span
      className={`${className} neon-font ${neonColor}Color ${neonSize}`}
      style={{
        fontFamily,
        fontSize,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
