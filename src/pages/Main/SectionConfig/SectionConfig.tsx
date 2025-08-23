/**
 * @fileoverview SectionConfig.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonDiv from '@/components/neon-div';
import NeonFont from '@/components/neon-font';
import useConfig from '@/hooks/use-config';

import './SectionConfig.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  config: ReturnType<typeof useConfig>;
}

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

function ButtonCount({ children, onClick, count }) {
  return (
    <NeonFont
      className={`ButtonCount ${count >= 1 ? '' : 'off'}`}
      neonColor={count >= 1 ? 'banana' : 'black'}
      neonSize="s"
      fontFamily="Audiowide"
      fontSize="40px"
    >
      <label>
        <input type="button" onClick={onClick} />
        <span>{children}</span>
        <span>{count}</span>
      </label>
    </NeonFont>
  );
}

function CheckBox({ children, onChange, isChecked }) {
  return (
    <NeonFont
      className="CheckBox"
      neonColor={isChecked ? 'banana' : 'black'}
      neonSize="s"
      fontFamily="Audiowide"
      fontSize="40px"
    >
      <label>
        <input type="checkbox" onChange={onChange} />
        <span>{children}</span>
      </label>
    </NeonFont>
  );
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function SectionConfig({ config }: Props): React.JSX.Element {
  const { configState, handleConfigState } = config;
  const questionTypeKeys = ['cs', 'fe', 'be', 'db', 'oop'];

  /* Func */
  const handleButtonCount = (e, key) => {
    if (e.ctrlKey && configState[key] - 1 >= 0) {
      handleConfigState({ [key]: configState[key] - 1 });
    } else if (!e.ctrlKey && configState[key] + 1 <= 10) {
      handleConfigState({ [key]: configState[key] + 1 });
    }
  };

  /* Return */
  return (
    <NeonDiv
      className={`SectionConfig ${configState.visibility ? '' : 'invisible'}`}
      neonSize="m"
      neonColor="banana"
    >
      <div>
        <div>
          {questionTypeKeys.map(key => (
            <CheckBox
              key={key}
              onChange={() =>
                handleConfigState({
                  [key]: !configState[key],
                })
              }
              isChecked={configState[key]}
            >
              {key.toUpperCase()}
            </CheckBox>
          ))}
        </div>
        <div>
          <ButtonCount
            onClick={e => handleButtonCount(e, 'main')}
            count={configState.main}
          >
            QUESTION-MAIN:
          </ButtonCount>
          <ButtonCount onClick={e => handleButtonCount(e, 'sub')} count={configState.sub}>
            QUESTION-SUB:
          </ButtonCount>
          <ButtonCount
            onClick={e => handleButtonCount(e, 'time')}
            count={configState.time}
          >
            TIME-LIMIT:
          </ButtonCount>
        </div>
      </div>
    </NeonDiv>
  );
}
