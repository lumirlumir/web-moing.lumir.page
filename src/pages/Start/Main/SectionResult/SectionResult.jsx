import React from 'react';

import CompDivNeon from '@/components/CompDivNeon';
import CompFontNeon from '@/components/CompFontNeon';

import './SectionResult.scss';

/**
 *
 * @returns SectionResult
 */
export default function SectionResult() {
  /* Return */
  return (
    <CompDivNeon className="SectionResult invisible" neonSize="s" neonColor="violet">
      <CompFontNeon
        neonColor="silver"
        neonSize="xs"
        fontFamily="gowun dodum"
        fontSize="20px"
      >
        등급, 세부 등급, 면접관 종합의견, 인터뷰이 정보 및 질문과 질문에 대한 답변
        히스토리
      </CompFontNeon>
    </CompDivNeon>
  );
}
SectionResult.propTypes = {};
SectionResult.defaultProps = {};
