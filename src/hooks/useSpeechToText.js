import { useCallback } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function useSpeechToText() {
  /* Hooks */
  // useSpeechRecognition
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  /* Func */
  const toggleListening = useCallback(() => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
    }
  }, [listening]);

  /* Return */
  return {
    transcript,
    listening,
    resetTranscript,
    toggleListening,
  };
}
