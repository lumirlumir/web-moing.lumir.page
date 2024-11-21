import React, { useCallback, useMemo } from 'react';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import {
  scenarioPropTypes,
  configPropTypes,
  interviewPropTypes,
} from '@/utils/propTypes';

import './ButtonMain.scss';

/**
 *
 * @returns ButtonMain
 */
function ButtonMain({ scenario, config, interview }) {
  /* Props */
  const { getSubsectionObj, toNextSubsection, toLastSubsection } = scenario;
  const { content, visibility: _visibility } = getSubsectionObj().Main.ButtonMain;
  const { configState, handleConfigState, isConfigDone } = config;
  const { initInterview } = interview;

  /* Hooks */
  // useMemo
  const visibility = useMemo(() => {
    if (_visibility === null) {
      return isConfigDone();
    }
    return _visibility;
  }, [_visibility, isConfigDone]);
  // useCallback
  const onClick = useCallback(
    e => {
      if (content === 'PRESS') {
        toNextSubsection();
      }
      if (content === 'START') {
        if (e.ctrlKey) {
          toLastSubsection();
          return;
        }
        if (isConfigDone()) {
          handleConfigState({ visibility: false });
          initInterview(configState);
        }
        toNextSubsection();
      }
      if (content === 'DOWNLOAD') {
        // TODO
      }
    },
    [
      toNextSubsection,
      toLastSubsection,
      content,
      configState,
      handleConfigState,
      isConfigDone,
      initInterview,
    ],
  );

  /* Return */
  return (
    <div className={`ButtonMain ${visibility ? '' : 'invisible'}`}>
      <CompButtonLight style={{ padding: '20px 30px' }} onClick={e => onClick(e)}>
        <CompFontNeon
          neonColor="white"
          neonSize="s"
          fontFamily="Audiowide"
          fontSize="40px"
        >
          {content}
        </CompFontNeon>
      </CompButtonLight>
    </div>
  );
}
ButtonMain.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  config: configPropTypes.isRequired,
  interview: interviewPropTypes.isRequired,
};
ButtonMain.defaultProps = {};

export default ButtonMain;
