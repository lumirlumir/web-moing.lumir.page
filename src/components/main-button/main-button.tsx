/**
 * @fileoverview ButtonMain.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { useCallback, useMemo } from 'react';

import NeonButton from '@/components/neon-button';
import NeonFont from '@/components/neon-font';
import useConfig from '@/hooks/use-config';
import useScenario from '@/hooks/use-scenario';
import useInterview from '@/hooks/use-interview';

import './main-button.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  config: ReturnType<typeof useConfig>;
  interview: ReturnType<typeof useInterview>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function ButtonMain({
  scenario,
  config,
  interview,
}: Props): React.JSX.Element {
  const { getSectionObj, toNextSection, toLastSection } = scenario;
  const { content, visibility: _visibility } = getSectionObj().Main.ButtonMain;
  const { configState, handleConfigState, isConfigDone } = config;
  const { initInterview } = interview;

  const visibility = useMemo(() => {
    if (_visibility === null) {
      return isConfigDone();
    }
    return _visibility;
  }, [_visibility, isConfigDone]);

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
        <NeonFont neonColor="white" neonSize="s" fontFamily="Audiowide" fontSize="40px">
          {content}
        </NeonFont>
      </NeonButton>
    </div>
  );
}
