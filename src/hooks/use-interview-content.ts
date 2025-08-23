import { useCallback, useEffect, useRef } from 'react';

import useContent from '@/hooks/use-content';
import useSpeechRecognition from '@/hooks/use-speech-recognition';

export default function useInterviewContent() {
  /* Hooks */
  // useContent
  const { contentRef, getTextContent, getHTMLContent, setHTMLContent } = useContent();
  // useSpeechRecognition
  const {
    transcript,
    listening,
    resetTranscript,
    toggleListening: toggle,
  } = useSpeechRecognition();
  // useRef
  const prevContent = useRef(null);
  // useEffect
  useEffect(() => {
    if (listening) setHTMLContent(`${prevContent.current}${transcript}`);
  }, [transcript, listening, setHTMLContent]);

  /* Func */
  const toggleListening = useCallback(() => {
    if (!listening) prevContent.current = getHTMLContent();
    toggle();
    if (!listening) resetTranscript();
  }, [getHTMLContent, listening, resetTranscript, toggle]);

  /* Return */
  return {
    contentRef,
    getTextContent,
    setHTMLContent,
    listening,
    toggleListening,
  };
}
