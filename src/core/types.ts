/* eslint-disable @typescript-eslint/no-unsafe-function-type -- TODO */

import type React from 'react';

export interface Scenario {
  subsectionState: number;
  getSectionObj: Function;
  toNextSection: Function;
  toLastSection: Function;
}

export interface Interview {
  contentRef: React.RefObject<HTMLElement>;
  listening: boolean;
  toggleListening: Function;
  isInterviewDone: Function;
  getInterviewInfo: Function;
  getInterviewHistory: Function;
  getQuestion: Function;
  initInterview: Function;
  submit: Function;
}

export interface Timer {
  resetTimer: Function;
  stopTimer: Function;
  getTimer: Function;
}
