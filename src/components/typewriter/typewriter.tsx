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
   * Callback fired when a line is completely typed.
   */
  onLineTyped?: (lineIndex: number) => void;

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
  onLineTyped = undefined,
  onLoopComplete = undefined,
  ...props
}: TypewriterProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentLine, setCurrentLine] = useState<string>('');
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [eraseCharIndex, setEraseCharIndex] = useState<number>(0);

  // Reset when `strings` prop changes
  useEffect(() => {
    setCurrentLine('');
    setLineIndex(0);
    setCharIndex(0);
    setIsErasing(false);
    setEraseCharIndex(0);
  }, [string]);

  // Notify when line typed
  useEffect(() => {
    if (lineIndex > 0) {
      onLineTyped?.(lineIndex - 1);
    }
  }, [lineIndex, onLineTyped]);

  // Typing effect
  useEffect(() => {
    if (pause) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      return undefined;
    }

    if (isErasing) return undefined;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (charIndex >= string.length) {
      if (loop) {
        timeoutRef.current = setTimeout(() => setIsErasing(true), eraseDelay);
      } else {
        return undefined;
      }
    } else if (charIndex < string.length) {
      timeoutRef.current = setTimeout(() => {
        setCurrentLine(prev => prev + string[charIndex]);
        setCharIndex(prev => prev + 1);
      }, speed);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [
    charIndex,
    lineIndex,
    currentLine,
    isErasing,
    string,
    speed,
    eraseDelay,
    pause,
    loop,
  ]);

  // Erasing effect
  useEffect(() => {
    if (pause) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      return undefined;
    }

    if (!isErasing) return undefined;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (eraseCharIndex < currentLine.length) {
      timeoutRef.current = setTimeout(() => {
        const newLine = currentLine.slice(0, currentLine.length - eraseCharIndex - 1);
        setCurrentLine(newLine);
        setEraseCharIndex(prev => prev + 1);
      }, eraseSpeed);
    } else {
      timeoutRef.current = setTimeout(() => {
        setEraseCharIndex(0);
      }, eraseSpeed);

      if (loop) {
        onLoopComplete?.();
        setLineIndex(0);
        setCharIndex(0);
        setIsErasing(false);
        setEraseCharIndex(0);
        setCurrentLine('');
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
    eraseCharIndex,
    eraseSpeed,
    string,
    loop,
    onLoopComplete,
    pause,
  ]);

  return (
    <div style={{ whiteSpace: 'pre' }} {...props}>
      {currentLine}
      {showCursor ? <span className="cursor">{cursor}</span> : null}
      <style>{css}</style>
    </div>
  );
}
