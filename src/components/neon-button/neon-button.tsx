/**
 * @fileoverview neon-button.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import './neon-button.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Size of the neon effect.
   * @default '2px'
   */
  neonSize?: React.CSSProperties['width'] & React.CSSProperties['height'];

  /**
   * Whether to apply a hover effect.
   * @default false
   */
  hoverEffect?: boolean;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `NeonButton`.
 * @example
 * // Default Values
 * <NeonButton neonSize="2px" hoverEffect={false}>
 *   {undefined}
 * </NeonButton>
 */
export default function NeonButton({
  neonSize = '2px',
  hoverEffect = false,
  children,
  ...props
}: React.PropsWithChildren<Props> = {}): React.JSX.Element {
  return (
    <div className={`neon-button ${hoverEffect ? 'hover' : ''}`}>
      <span style={{ height: neonSize }} />
      <span style={{ width: neonSize }} />
      <span style={{ height: neonSize }} />
      <span style={{ width: neonSize }} />
      <button type="button" {...props}>
        {children}
      </button>
    </div>
  );
}
