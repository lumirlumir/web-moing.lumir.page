import { useCallback, useEffect, useRef } from 'react';

import useContent from '@/hooks/utils/useContent';
import useSpeechToText from '@/hooks/utils/useSpeechToText';

const useInterviewContent = () => {
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
};

export default useInterviewContent;
