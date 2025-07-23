/**
 * @fileoverview neon-button
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';
import './neon-button.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  /**
   * Style for the button.
   * @default {}
   */
  style?: React.CSSProperties;
  /**
   * Click event handler for the button.
   * @default () => {}
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Size of the neon effect.
   * @default '2px'
   */
  neonSize?: string;
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
 * //Default Values
 * <NeonButton style={{}} onClick={() => {}} neonSize="2px" hoverEffect={false}>
 *   {undefined}
 * </NeonButton>
 */
export default function NeonButton({
  children,
  style = {},
  onClick = () => {},
  neonSize = '2px',
  hoverEffect = false,
  ...props
}: React.PropsWithChildren<Props> = {}): React.JSX.Element {
  return (
    <div className={`neon-button ${hoverEffect ? 'hover' : ''}`}>
      <span style={{ height: neonSize }} />
      <span style={{ width: neonSize }} />
      <span style={{ height: neonSize }} />
      <span style={{ width: neonSize }} />
      <button type="button" style={style} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
}
