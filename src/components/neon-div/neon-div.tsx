/**
 * @fileoverview neon-div.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import './neon-div.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props extends React.HTMLAttributes<HTMLDivElement> {
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
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `NeonDiv`.
 * @example
 * // Default Values
 * <NeonDiv neonColor="red" neonSize="l">
 *   {undefined}
 * </NeonDiv>
 */
export default function NeonDiv({
  neonColor = 'red',
  neonSize = 'l',
  className = '',
  children,
  ...props
}: React.PropsWithChildren<Props> = {}): React.JSX.Element {
  return (
    <div className={`${className} neon-div ${neonColor} ${neonSize}`} {...props}>
      {children}
    </div>
  );
}
