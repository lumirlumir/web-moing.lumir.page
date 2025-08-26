import { useCallback } from 'react';
import SpeechRecognition, {
  useSpeechRecognition as _useSpeechRecognition,
} from 'react-speech-recognition';

export default function useSpeechRecognition() {
  /* Hooks */
  // useSpeechRecognition
  const { transcript, listening, resetTranscript } = _useSpeechRecognition();

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
