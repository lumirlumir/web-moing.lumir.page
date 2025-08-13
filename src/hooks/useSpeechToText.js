/**
 * @fileoverview Speech Recognition Hook.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
 * @see https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js
 * @see https://stackoverflow.com/questions/75420503/how-to-detect-speech-to-text-support-and-what-is-the-meaning-of-mozspeechrecogni
 */

/* eslint-disable -- TODO */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { useCallback } from 'react';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const NativeSpeechRecognition =
  typeof window !== 'undefined' &&
  (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition ||
    window.oSpeechRecognition);

const isNative = SpeechRecognition => SpeechRecognition === NativeSpeechRecognition;

const isAndroid = /(android)/i.test(
  typeof navigator !== 'undefined' ? navigator.userAgent : '',
);

let _browserSupportsSpeechRecognition = !!NativeSpeechRecognition;
let _browserSupportsContinuousListening =
  _browserSupportsSpeechRecognition && !isAndroid();

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

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
