/**
 * @fileoverview use-interview-content
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { useCallback, useEffect, useRef } from 'react';
import useSpeechRecognition from '@/hooks/use-speech-recognition';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function useInterviewContent<T extends HTMLElement>() {
  const contentRef = useRef<T>(null);
  const prevContent = useRef(null);
  const {
    transcript,
    listening,
    resetTranscript,
    toggleListening: toggle,
  } = useSpeechRecognition();

  useEffect(() => {
    if (listening) contentRef.current.innerHTML = `${prevContent.current}${transcript}`;
  }, [transcript, listening]);

  const toggleListening = useCallback(() => {
    if (!listening) prevContent.current = contentRef.current.innerHTML;
    toggle();
    if (!listening) resetTranscript();
  }, [listening, resetTranscript, toggle]);

  return {
    contentRef,
    listening,
    toggleListening,
  };
}
