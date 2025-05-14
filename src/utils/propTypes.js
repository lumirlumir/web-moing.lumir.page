import PropTypes from 'prop-types';

export const scenarioPropTypes = PropTypes.shape({
  subsectionState: PropTypes.number.isRequired,
  getSectionObj: PropTypes.func.isRequired,
  toNextSubsection: PropTypes.func.isRequired,
  toLastSubsection: PropTypes.func.isRequired,
});

export const configPropTypes = PropTypes.shape({
  configState: PropTypes.shape({
    visibility: PropTypes.bool.isRequired,
    questionType: PropTypes.shape({
      cs: PropTypes.bool.isRequired,
      fe: PropTypes.bool.isRequired,
      be: PropTypes.bool.isRequired,
      db: PropTypes.bool.isRequired,
      oop: PropTypes.bool.isRequired,
    }).isRequired,
    questionMain: PropTypes.number.isRequired,
    questionSub: PropTypes.number.isRequired,
    timeLimit: PropTypes.number.isRequired,
  }).isRequired,
  handleConfigState: PropTypes.func.isRequired,
});

export const interviewPropTypes = PropTypes.shape({
  isInterviewDone: PropTypes.func.isRequired,
  getQuestion: PropTypes.func.isRequired,
  contentRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLElement),
  }).isRequired,
  initInterview: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
});

export const timerPropTypes = PropTypes.shape({
  resetTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  getTimer: PropTypes.func.isRequired,
});
