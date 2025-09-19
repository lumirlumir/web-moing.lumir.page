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

export interface TypewriterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * String to type out.
   */
  string: string;

  /**
   * The value to use as the cursor. Set to `null` to disable.
   * @default '|'
   */
  cursor?: string | null;

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
// Helper
// --------------------------------------------------------------------------------

const css = `
.cursor {
  display: inline;
  animation: blink 1s steps(1, end) infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
`;

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function Typewriter({
  string,
  cursor = '|',
  writeSpeed = 50,
  eraseSpeed = 50,
  writeDelay = 1_500,
  eraseDelay = 1_500,
  loop = false,
  pause = false,
  onWriteComplete = undefined,
  onEraseComplete = undefined,
  ...props
}: TypewriterProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentString, setCurrentString] = useState<string>('');
  const [isErasing, setIsErasing] = useState<boolean>(false);

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

    // Typing effect
    if (!isErasing) {
      if (currentString.length === string.length) {
        timeoutRef.current = setTimeout(() => {
          if (loop) {
            setIsErasing(prev => !prev);
          }

          onWriteComplete?.();
        }, eraseDelay);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentString(prev => prev + string[currentString.length]);
        }, writeSpeed);
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (currentString.length === 0) {
        timeoutRef.current = setTimeout(() => {
          if (loop) {
            setIsErasing(prev => !prev);
          }

          onEraseComplete?.();
        }, writeDelay);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentString(prev => prev.slice(0, prev.length - 1));
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
    string,
    writeSpeed,
    eraseSpeed,
    writeDelay,
    eraseDelay,
    loop,
    pause,
    onWriteComplete,
    onEraseComplete,
    currentString,
    isErasing,
  ]);

  return (
    <div style={{ whiteSpace: 'pre' }} {...props}>
      {currentString}
      <span className="cursor">{cursor}</span>
      <style>{css}</style>
    </div>
  );
}
