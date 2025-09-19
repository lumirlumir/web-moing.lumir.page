/**
 * @fileoverview typewriter.
 */

// TODO: RAF(requestAnimationFrame)

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { useEffect, useRef, useState } from 'react';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

export interface TypewriterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Text to type out.
   */
  text: string;

  /**
   * The value to use as the cursor. Set to `null` to disable.
   * @default '|'
   */
  cursor?: string | null;

  /**
   * The class name to apply to the cursor element.
   * @default 'cursor'
   */
  cursorClassName?: string;

  /**
   * The delay between each character when writing (milliseconds).
   * @default 50
   */
  writeSpeed?: number;

  /**
   * The delay between each character when erasing (milliseconds).
   * @default 50
   */
  eraseSpeed?: number;

  /**
   * Delay before starting to write (milliseconds).
   * @default 1500
   */
  writeDelay?: number;

  /**
   * Delay before starting to erase (milliseconds).
   * @default 1500
   */
  eraseDelay?: number;

  /**
   * Whether to keep looping or not.
   * @default false
   */
  loop?: boolean;

  /**
   * Temporarily pauses writing/erasing when set to `true`.
   * @default false
   */
  pause?: boolean;

  /**
   * Callback function that is called when writing is complete.
   * @default undefined
   */
  onWriteComplete?: () => void;

  /**
   * Callback function that is called when erasing is complete.
   * @default undefined
   */
  onEraseComplete?: () => void;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * TIP
 * - Use `style={{ whiteSpace: 'pre' }}` to support multiline text.
 */
export default function Typewriter({
  text,
  cursor = '|',
  cursorClassName = 'cursor',
  writeSpeed = 50,
  eraseSpeed = 50,
  writeDelay = 1_500,
  eraseDelay = 1_500,
  loop = false,
  pause = false,
  onWriteComplete = undefined,
  onEraseComplete = undefined,
  ...props
}: TypewriterProps): React.JSX.Element {
  const [currentText, setCurrentText] = useState<string>('');
  const [mode, setMode] = useState<'write' | 'erase'>('write');

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (pause) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      return undefined;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (mode === 'write') {
      if (currentText.length === text.length) {
        timeoutRef.current = setTimeout(() => {
          if (loop) {
            setMode('erase');
          }

          onWriteComplete?.();
        }, eraseDelay);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(prev => prev + text[currentText.length]);
        }, writeSpeed);
      }
    } else if (mode === 'erase') {
      if (currentText.length === 0) {
        timeoutRef.current = setTimeout(() => {
          if (loop) {
            setMode('write');
          }

          onEraseComplete?.();
        }, writeDelay);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, prev.length - 1));
        }, eraseSpeed);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [
    text,
    writeSpeed,
    eraseSpeed,
    writeDelay,
    eraseDelay,
    loop,
    pause,
    onWriteComplete,
    onEraseComplete,
    currentText,
    mode,
  ]);

  return (
    <span {...props}>
      {currentText}
      <span className={cursorClassName}>{cursor}</span>
    </span>
  );
}
