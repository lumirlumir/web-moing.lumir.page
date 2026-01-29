/**
 * @fileoverview neon-font.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { type HTMLAttributes, type PropsWithChildren } from 'react';
import { cn } from '@/utils';
import './neon-font.scss';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

interface Props extends HTMLAttributes<HTMLSpanElement> {
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
 * Component `NeonFont`.
 * @example
 * // Default Values
 * <NeonFont neonColor="red" neonSize='l'>
 *   {undefined}
 * </NeonFont>
 */
export default function NeonFont({
  neonColor = 'red',
  neonSize = 'l',
  className = '',
  children,
  ...props
}: PropsWithChildren<Props> = {}) {
  return (
    <span className={cn('neon-font', className, neonColor, neonSize)} {...props}>
      {children}
    </span>
  );
}
