/**
 * @fileoverview SectionServer.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import Typewriter from 'typewriter-effect';

import NeonDiv from '@/components/neon-div';
import useScroll from '@/hooks/use-scroll';
import useHistoryState from '@/hooks/use-history-state';

import './SectionServer.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Scenario, Config, Interview, Timer } from '@/core/types';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Component `SectionServer`.
 * @param {object} props
 * @param {Scenario} props.scenario
 * @param {Config} props.config
 * @param {Interview} props.interview
 * @param {Timer} props.timer
 * @returns {React.JSX.Element}
 */
export default function SectionServer({ scenario, config, interview, timer }) {
  /* Props */
  const { subsectionState, getSectionObj, toNextSection } = scenario;
  const { auto, api, result } = getSectionObj().global;
  const { visibility, content } = getSectionObj().Main.SectionServer;
  const { configState } = config;
  const { getInterviewInfo, getQuestion, isInterviewDone, getInterviewHistory } =
    interview;
  const { resetTimer } = timer;

  /* Hooks */
  // custom
  const { scrollRef, scroll } = useScroll<HTMLDivElement>();
  const { historyState, addHistory } = useHistoryState();
  // useMemo
  const text = useMemo(() => {
    if (api)
      return getQuestion() === null
        ? ''
        : `> ${getInterviewInfo().questionType.toUpperCase()}분야 ${getInterviewInfo().questionMain}-${getInterviewInfo().questionSub}번 문제입니다. ${getQuestion()}\n\n`;

    if (result) return getInterviewHistory();

    return content;
  }, [api, content, result, getInterviewInfo, getQuestion, getInterviewHistory]);
  // useLayoutEffect
  useLayoutEffect(() => {
    addHistory(text);
  }, [subsectionState, text, addHistory]);
  // useEffect
  useEffect(() => {
    if (api && isInterviewDone()) toNextSection();
  }, [getQuestion, isInterviewDone, toNextSection, api]);

  /* Return */
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
                if (api && text !== '') resetTimer(configState.timeLimit);
                scroll();
              });
          }}
        />
      </div>
      <div className="ref" ref={scrollRef} />
    </NeonDiv>
  );
}
