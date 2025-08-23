import { useCallback, useEffect, useRef } from 'react';

import useSpeechRecognition from '@/hooks/use-speech-recognition';

export default function useInterviewContent() {
  const contentRef = useRef(null);
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

  /* Return */
  return {
    contentRef,
    listening,
    toggleListening,
  };
}
