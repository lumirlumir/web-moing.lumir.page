import React from 'react';

import CompDivNeon from '@/components/CompDivNeon';
import { configPropTypes } from '@/utils/propTypes';

import ButtonCount from './ButtonCount';
import CheckBox from './CheckBox';

import './SectionConfig.scss';

/**
 *
 * @returns SectionConfig
 */
export default function SectionConfig({ config }) {
  /* Props */
  const { configState, handleConfigState } = config;
  const questionTypeKeys = Object.keys(configState.questionType);

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
    <CompDivNeon
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
                  questionType: { [key]: !configState.questionType[key] },
                })
              }
              isChecked={configState.questionType[key]}
            >
              {key.toUpperCase()}
            </CheckBox>
          ))}
        </div>
        <div>
          <ButtonCount
            onClick={e => handleButtonCount(e, 'questionMain')}
            count={configState.questionMain}
          >
            QUESTION-MAIN:
          </ButtonCount>
          <ButtonCount
            onClick={e => handleButtonCount(e, 'questionSub')}
            count={configState.questionSub}
          >
            QUESTION-SUB:
          </ButtonCount>
          <ButtonCount
            onClick={e => handleButtonCount(e, 'timeLimit')}
            count={configState.timeLimit}
          >
            TIME-LIMIT:
          </ButtonCount>
        </div>
      </div>
    </CompDivNeon>
  );
}
SectionConfig.propTypes = {
  config: configPropTypes.isRequired,
};
