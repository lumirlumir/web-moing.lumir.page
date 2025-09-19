/**
 * @fileoverview typewriter.
 * @see https://github.com/shrestha-bishal/react-typewriter
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
   * Array of strings to type line-by-line.
   */
  string: string;

  /**
   * The delay between each key when typing in milliseconds.
   * @default 50
   */
  speed?: number;

  /**
   * Erasing speed in milliseconds per character.
   */
  eraseSpeed?: number;

  /**
   * Delay before starting to erase (in ms).
   */
  eraseDelay?: number;

  /**
   * Whether to erase and restart after finishing all lines.
   */
  loop?: boolean;

  /**
   * Whether to display the blinking cursor.
   */
  showCursor?: boolean;

  /**
   * The cursor character.
   */
  cursor?: React.ReactNode;

  /**
   * Temporarily pauses typing or erasing.
   */
  pause?: boolean;

  /**
   * Callback fired after a full cycle when loop is enabled.
   */
  onLoopComplete?: () => void;
}

// --------------------------------------------------------------------------------
// Helpers
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
  speed = 50,
  eraseSpeed = 30,
  eraseDelay = 1000,
  loop = true,
  showCursor = true,
  cursor = '|',
  pause = false,
  onLoopComplete = undefined,
  ...props
}: TypewriterProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentLine, setCurrentLine] = useState<string>('');
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
      if (currentLine.length === string.length) {
        if (loop) {
          timeoutRef.current = setTimeout(() => {
            setIsErasing(prev => !prev);
          }, eraseDelay);
        }
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentLine(prev => prev + string[currentLine.length]);
        }, speed);
      }
    } else {
      // eslint-disable-next-line no-lonely-if -- TODO
      if (currentLine.length === 0) {
        if (loop) {
          setIsErasing(prev => !prev);
          onLoopComplete?.();
        }
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentLine(prev => prev.slice(0, prev.length - 1));
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
    currentLine,
    isErasing,
    speed,
    eraseSpeed,
    string,
    eraseDelay,
    pause,
    loop,
    onLoopComplete,
  ]);

  return (
    <div style={{ whiteSpace: 'pre' }} {...props}>
      {currentLine}
      {showCursor ? <span className="cursor">{cursor}</span> : null}
      <style>{css}</style>
    </div>
  );
}
