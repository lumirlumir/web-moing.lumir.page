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
  strings: string[];

  /**
   * The delay between each key when typing in milliseconds.
   * @default 50
   */
  delay?: number;

  /**
   * The delay before moving to the next line in milliseconds.
   * @default 500
   */
  lineDelay?: number;

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
  strings,
  delay = 50,
  lineDelay = 500,
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
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState<string>('');
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [eraseLineIndex, setEraseLineIndex] = useState<number>(strings.length - 1);
  const [eraseCharIndex, setEraseCharIndex] = useState<number>(0);

  // Reset when `strings` prop changes
  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLine('');
    setLineIndex(0);
    setCharIndex(0);
    setIsErasing(false);
    setEraseLineIndex(strings.length - 1);
    setEraseCharIndex(0);
  }, [strings]);

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

    if (lineIndex >= strings.length) {
      if (loop) {
        timeoutRef.current = setTimeout(() => setIsErasing(true), eraseDelay);
      } else {
        setDisplayedLines(strings);
        setCurrentLine('');
        return undefined;
      }
    } else if (charIndex < strings[lineIndex].length) {
      timeoutRef.current = setTimeout(() => {
        setCurrentLine(prev => prev + strings[lineIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, delay);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentLine]);
        setCurrentLine('');
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      }, lineDelay);
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
    strings,
    delay,
    lineDelay,
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

    const currentEraseLine = displayedLines[eraseLineIndex] || '';

    if (eraseLineIndex < 0) {
      if (loop) {
        onLoopComplete?.();
        setDisplayedLines([]);
        setLineIndex(0);
        setCharIndex(0);
        setIsErasing(false);
        setEraseLineIndex(strings.length - 1);
        setEraseCharIndex(0);
        setCurrentLine('');
      }
      return undefined;
    }

    if (eraseCharIndex < currentEraseLine.length) {
      timeoutRef.current = setTimeout(() => {
        const newLine = currentEraseLine.slice(
          0,
          currentEraseLine.length - eraseCharIndex - 1,
        );
        setDisplayedLines(prev => {
          const copy = [...prev];
          copy[eraseLineIndex] = newLine;
          return copy;
        });
        setEraseCharIndex(prev => prev + 1);
      }, eraseSpeed);
    } else {
      timeoutRef.current = setTimeout(() => {
        setEraseLineIndex(prev => prev - 1);
        setEraseCharIndex(0);
      }, eraseSpeed);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [
    isErasing,
    eraseLineIndex,
    eraseCharIndex,
    displayedLines,
    eraseSpeed,
    strings.length,
    loop,
    onLoopComplete,
    pause,
  ]);

  return (
    <div {...props}>
      {displayedLines.map((line, i) => (
        // eslint-disable-next-line -- TODO
        <div key={i}>{line}</div>
      ))}
      <div style={{ whiteSpace: 'pre' }}>
        {currentLine}
        {showCursor ? <span className="cursor">{cursor}</span> : null}
      </div>
      <style>{css}</style>
    </div>
  );
}
