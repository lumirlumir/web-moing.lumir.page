/**
 * @fileoverview ButtonMain.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { useCallback, useMemo } from 'react';

import NeonButton from '@/components/neon-button';
import CompFontNeon from '@/components/CompFontNeon';

import './ButtonMain.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Scenario, Config, Interview } from '@/core/types';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `ButtonMain`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @param {Config} props.config
 * @param {Interview} props.interview
 * @returns {React.JSX.Element}
 */
export default function ButtonMain({ scenario, config, interview }) {
  /* Props */
  const { getSectionObj, toNextSection, toLastSection } = scenario;
  const { content, visibility: _visibility } = getSectionObj().Main.ButtonMain;
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
        toNextSection();
      }
      if (content === 'START') {
        if (e.ctrlKey) {
          toLastSection();
          return;
        }
        if (isConfigDone()) {
          handleConfigState({ visibility: false });
          initInterview(configState);
        }
        toNextSection();
      }
    },
    [
      toNextSection,
      toLastSection,
      content,
      configState,
      handleConfigState,
      isConfigDone,
      initInterview,
    ],
  );

  return (
    <div className={`ButtonMain ${visibility ? '' : 'invisible'}`}>
      <NeonButton style={{ padding: '20px 30px' }} onClick={e => onClick(e)}>
        <CompFontNeon
          neonColor="white"
          neonSize="s"
          fontFamily="Audiowide"
          fontSize="40px"
        >
          {content}
        </CompFontNeon>
      </NeonButton>
    </div>
  );
}
