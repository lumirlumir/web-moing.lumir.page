import { useCallback, useEffect, useRef } from 'react';

import useContent from '@/hooks/useContent';
import useSpeechToText from '@/hooks/useSpeechToText';

export default function useInterviewContent() {
  /* Hooks */
  // useContent
  const { contentRef, getTextContent, getHTMLContent, setHTMLContent } = useContent();
  // useSpeechToText
  const {
    transcript,
    listening,
    resetTranscript,
    toggleListening: toggle,
  } = useSpeechToText();
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
