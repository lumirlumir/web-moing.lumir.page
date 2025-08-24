/**
 * @fileoverview section-config.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React from 'react';

import NeonDiv from '@/components/neon-div';
import NeonFont from '@/components/neon-font';
import useConfig, { questionTypes } from '@/hooks/use-config';

import './section-config.scss';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Props {
  config: ReturnType<typeof useConfig>;
}

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

function ButtonCount({ onClick, count, label }) {
  return (
    <NeonFont
      neonColor={count >= 1 ? 'banana' : 'black'}
      neonSize="s"
      className={`ButtonCount ${count >= 1 ? '' : 'off'}`}
      style={{
        fontFamily: 'Audiowide',
        fontSize: '40px',
      }}
    >
      <label>
        <input type="button" onClick={onClick} />
        <span>{label}</span>
        <span>{count}</span>
      </label>
    </NeonFont>
  );
}

function CheckBox({ onChange, isChecked, label }) {
  return (
    <NeonFont
      neonColor={isChecked ? 'banana' : 'black'}
      neonSize="s"
      className="CheckBox"
      style={{
        fontFamily: 'Audiowide',
        fontSize: '40px',
      }}
    >
      <label>
        <input type="checkbox" onChange={onChange} />
        <span>{label}</span>
      </label>
    </NeonFont>
  );
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function SectionConfig({ config }: Props): React.JSX.Element {
  const { configState, handleConfigState } = config;

  const handleButtonCount = (e, key) => {
    if (e.ctrlKey && configState[key] - 1 >= 0) {
      handleConfigState({ [key]: configState[key] - 1 });
    } else if (!e.ctrlKey && configState[key] + 1 <= 10) {
      handleConfigState({ [key]: configState[key] + 1 });
    }
  };

  return (
    <NeonDiv
      className={`section-config select-none ${configState.visibility ? '' : 'invisible'}`}
      neonSize="m"
      neonColor="banana"
    >
      <div>
        <div>
          {questionTypes.map(key => (
            <CheckBox
              key={key}
              onChange={() =>
                handleConfigState({
                  [key]: !configState[key],
                })
              }
              isChecked={configState[key]}
              label={key.toUpperCase()}
            />
          ))}
        </div>
        <div>
          <ButtonCount
            onClick={e => handleButtonCount(e, 'main')}
            count={configState.main}
            label="QUESTION-MAIN:"
          />
          <ButtonCount
            onClick={e => handleButtonCount(e, 'sub')}
            count={configState.sub}
            label="QUESTION-SUB:"
          />
          <ButtonCount
            onClick={e => handleButtonCount(e, 'time')}
            count={configState.time}
            label="TIME-LIMIT:"
          />
        </div>
      </div>
    </NeonDiv>
  );
}
