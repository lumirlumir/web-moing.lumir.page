/**
 * @fileoverview use-speech-recognition
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { useCallback } from 'react';
import SpeechRecognition, {
  useSpeechRecognition as _useSpeechRecognition,
} from 'react-speech-recognition';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function useSpeechRecognition() {
  const { transcript, listening, resetTranscript } = _useSpeechRecognition();

  const toggleListening = useCallback(() => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
    }
  }, [listening]);

  return {
    transcript,
    listening,
    resetTranscript,
    toggleListening,
  };
}
