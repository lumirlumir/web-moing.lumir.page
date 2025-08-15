/**
 * @fileoverview neon-div
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import './neon-div.scss';

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
   * Border width for the component.
   * @default null
   */
  borderWidth?: string | null;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `NeonDiv`.
 * @example
 * //Default Values
 * <NeonDiv className="" neonColor="red" neonSize="l" borderWidth="2px">
 *   {undefined}
 * </NeonDiv>
 */
export default function NeonDiv({
  children,
  className = '',
  neonColor = 'red',
  neonSize = 'l',
  borderWidth = null,
  ...props
}: React.PropsWithChildren<Props> = {}): React.JSX.Element {
  return (
    <div
      className={`${className} neon-div ${neonColor}Color ${neonSize}`}
      style={{
        borderWidth,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
