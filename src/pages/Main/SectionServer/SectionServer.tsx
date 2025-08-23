/**
 * @fileoverview SectionServer.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import Typewriter from 'typewriter-effect';

import NeonDiv from '@/components/neon-div';
import useScenario from '@/hooks/use-scenario';
import useConfig from '@/hooks/use-config';
import useInterview from '@/hooks/use-interview';
import useTimer from '@/hooks/use-timer';
import useScroll from '@/hooks/use-scroll';
import useHistoryState from '@/hooks/use-history-state';

import './SectionServer.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  scenario: ReturnType<typeof useScenario>;
  config: ReturnType<typeof useConfig>;
  interview: ReturnType<typeof useInterview>;
  timer: ReturnType<typeof useTimer>;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function SectionServer({
  scenario,
  config,
  interview,
  timer,
}: Props): React.JSX.Element {
  const { subsectionState, getSectionObj, toNextSection } = scenario;
  const { auto, api, result } = getSectionObj().global;
  const { visibility, content } = getSectionObj().Main.SectionServer;
  const { configState } = config;
  const { getInterviewInfo, getQuestion, isInterviewDone, getInterviewHistory } =
    interview;
  const { resetTimer } = timer;
  const { scrollRef, scroll } = useScroll<HTMLDivElement>();
  const { historyState, addHistory } = useHistoryState();

  const text = useMemo(() => {
    if (api)
      return getQuestion() === null
        ? ''
        : `> ${getInterviewInfo().questionType.toUpperCase()}분야 ${getInterviewInfo().questionMain}-${getInterviewInfo().questionSub}번 문제입니다. ${getQuestion()}\n\n`;

    if (result) return getInterviewHistory();

    return content;
  }, [api, content, result, getInterviewInfo, getQuestion, getInterviewHistory]);

  useLayoutEffect(() => {
    addHistory(text);
  }, [subsectionState, text, addHistory]);

  useEffect(() => {
    if (api && isInterviewDone()) toNextSection();
  }, [getQuestion, isInterviewDone, toNextSection, api]);

  return (
    <NeonDiv
      className={`SectionServer ${visibility && !configState.visibility ? '' : 'invisible'} ${result ? 'wide' : ''}`}
      neonColor="black"
    >
      <div>{historyState.slice(0, -1)}</div>
      <div>
        <Typewriter
          key={text}
          options={{
            cursor: '_',
            delay: result ? 1 : 30, // original: 30
          }}
          onInit={typewriter => {
            typewriter
              .pauseFor(2000) // original: 2000
              .typeString(text)
              .pauseFor(1000) // original: 1000
              .start()
              .callFunction(() => {
                if (auto) toNextSection();
                if (api && text !== '') resetTimer(configState.time);
                scroll();
              });
          }}
        />
      </div>
      <div className="ref" ref={scrollRef} />
    </NeonDiv>
  );
}
