/**
 * @fileoverview use-scenario
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { useCallback, useState } from 'react';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

interface Visibility {
  visibility: boolean;
}

interface Clickability {
  clickability: boolean;
}

interface Content<T> {
  content: T;
}

interface Mode {
  mode: 'manual' | 'auto' | 'test' | 'result';
}

interface Scenario {
  FooterL: Visibility & Clickability;
  FooterM: Visibility;
  FooterR: Visibility & Clickability;
  HeaderL: Visibility & Clickability;
  HeaderR: Visibility & Clickability;
  ButtonMain: Visibility & Content<'PRESS' | 'START'>;
  Heading: Visibility;
  SectionClient: Visibility;
  SectionServer: Visibility & Content<string> & Mode;
}

// --------------------------------------------------------------------------------
// Data
// --------------------------------------------------------------------------------

const scenario: Scenario[][] = [
  [
    {
      FooterL: {
        visibility: false,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: true,
        content: 'PRESS',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: false,
        content: '',
        mode: 'manual',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: true,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'PRESS',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content: '$ Interviewer\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: true,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'PRESS',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          "> 안녕하세요, 'ChatGPT를 활용한 인터뷰 서비스'에 오신 것을 환영합니다. 서비스에 대한 소개 및 튜토리얼을 진행하겠습니다. 소개 및 튜토리얼 진행을 생략하고 싶으시면, 하단의 START 버튼을 키보드의 CTRL을 누른 채 눌러주시기 바랍니다.\n\n",
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: true,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: true,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content: '',
        mode: 'manual',
      },
    },
    {
      FooterL: {
        visibility: false,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 해당 인터뷰 서비스는 개발자 채용 과정에서의 면접 인력을 대체하여 기술 인터뷰를 진행할 수 있는 AI 면접 서비스를 위해 제작된 인공지능 웹서비스입니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: false,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 인터뷰는 AI 면접관의 질문을 통해 CS, FE, BE, DB, OOP 총 5가지 분야에 대한 기술 지식을 평가하는 방식으로 진행됩니다. 사용자의 인터뷰 답변 내용을 기반으로 등급이 채점되며, 점수에 따라 우수(A), 보통(B), 미흡(C) 중 하나의 등급이 부여됩니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: false,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> CS(Computer Science)는 자료구조, 알고리즘, 운영체제, 네트워크 등을 아우르는 컴퓨터 공학 지식 일반, FE(Front-End)는 클라이언트 사이드인 프론트엔드, BE(Back-End)는 서버 사이드인 백엔드, DB(DataBase)는 데이터베이스, OOP(Object-Oriented Programming)는 객체 지향 프로그래밍을 의미합니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: false,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 다음으로, 화면 UI 구성에 대해 설명하겠습니다. UI 구성에 대한 튜토리얼은 4개의 버튼과 2개의 섹션에 대한 설명으로 구성되어 있습니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 첫 번째로, 좌측 하단에 위치한 리셋 버튼입니다. 버튼을 누르면 인터뷰 서비스를 처음부터 다시 진행할 수 있습니다. 화면의 맨 처음으로 돌아가고 싶은 경우, 인터뷰 관련 환경설정을 잘못 진행한 경우, 서비스 간 오류가 발생한 경우 등 다양한 상황에 사용할 수 있습니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: true,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 두 번째로, 좌측 상단에 위치한 톱니 모양의 환경설정 버튼입니다. 버튼을 누르면 환경설정 섹션이 나타나고, 설정을 진행할 수 있습니다. CS, FE, BE, DB, OOP 각 분야별 인터뷰 메인 질문 개수(최소 1개 ~ 최대 10개), 메인 질문에 따른 꼬리 질문 개수(최소 1개 ~ 최대 10개), 각 질문에 대한 답변 시간제한(최소 1분 ~ 최대 10분)을 설정할 수 있습니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: true,
        clickability: false,
      },
      HeaderR: {
        visibility: true,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 세 번째로, 우측 상단에 위치한 마이크 모양의 음성인식 버튼입니다. 버튼을 누르면 음성인식을 진행할 수 있으며, 사용자의 음성이 텍스트로 변환됩니다. 사용자는 음성인식 종료 후 변환된 결과물을 입력창에서 확인할 수 있으며, 오변환을 수정하거나 내용을 추가하는 등 직접적인 텍스트 수정이 가능합니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: true,
        clickability: false,
      },
      HeaderL: {
        visibility: true,
        clickability: false,
      },
      HeaderR: {
        visibility: true,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 네 번째로, 우측 하단에 위치한 체크 모양의 제출 버튼입니다. 질문에 대한 답변 작성을 완료하였을 경우, 버튼을 눌러 답변을 제출할 수 있습니다. 제출 시 자동으로 후속 질문이 생성되며, 모든 질문이 종료되었을 경우 인터뷰를 마치겠다는 안내 메시지가 나타납니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: false,
      },
      FooterM: {
        visibility: true,
      },
      FooterR: {
        visibility: true,
        clickability: false,
      },
      HeaderL: {
        visibility: true,
        clickability: false,
      },
      HeaderR: {
        visibility: true,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 다섯 번째로, 중앙 하단에 위치한 타이머 섹션입니다. 환경설정에서 설정한 각 질문에 대한 답변 시간제한이 표시됩니다. 1분 이상의 시간이 남았을 경우에는 흰색, 1분 미만의 시간이 남았을 경우에는 빨간색으로 표시됩니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: false,
      },
      FooterM: {
        visibility: true,
      },
      FooterR: {
        visibility: true,
        clickability: false,
      },
      HeaderL: {
        visibility: true,
        clickability: false,
      },
      HeaderR: {
        visibility: true,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: false,
      },
      SectionClient: {
        visibility: true,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 마지막으로, 중앙의 Interviewer 섹션 아래에 위치한 Interviewee 섹션입니다. Interviewer의 질문에 대한 답변을 텍스트로 입력할 수 있습니다. 타이핑을 통해 텍스트를 직접 입력할 수 있으며, 우측 상단에 위치한 마이크 모양의 음성인식 버튼을 눌러 음성인식을 통한 타이핑을 활용할 수도 있습니다. 또한, 모든 섹션은 마우스 스크롤을 통해 위ㆍ아래로 이동이 가능합니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: false,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: true,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 이것으로 서비스에 대한 소개 및 튜토리얼을 마치겠습니다. 좌측 상단에 위치한 톱니 모양의 환경설정 버튼을 눌러 설정을 완료한 후 인터뷰 서비스를 진행해 주시기 바랍니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: true,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: true,
        clickability: true,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content: '',
        mode: 'manual',
      },
    },
  ],
  [
    {
      FooterL: {
        visibility: true,
        clickability: true,
      },
      FooterM: {
        visibility: true,
      },
      FooterR: {
        visibility: true,
        clickability: true,
      },
      HeaderL: {
        visibility: true,
        clickability: false,
      },
      HeaderR: {
        visibility: true,
        clickability: true,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: false,
      },
      SectionClient: {
        visibility: true,
      },
      SectionServer: {
        visibility: true,
        content: '> 지금부터 인터뷰를 진행하도록 하겠습니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: true,
      },
      FooterM: {
        visibility: true,
      },
      FooterR: {
        visibility: true,
        clickability: true,
      },
      HeaderL: {
        visibility: true,
        clickability: false,
      },
      HeaderR: {
        visibility: true,
        clickability: true,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: false,
      },
      SectionClient: {
        visibility: true,
      },
      SectionServer: {
        visibility: true,
        content: '',
        mode: 'test',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: true,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content:
          '> 이것으로 모든 인터뷰를 마치겠습니다. 잠시 후 인터뷰 결과를 발표하겠습니다. 성적은 poor(하) < fair(중) < good(상) 등급 중 하나로 채점됩니다.\n\n',
        mode: 'auto',
      },
    },
    {
      FooterL: {
        visibility: true,
        clickability: true,
      },
      FooterM: {
        visibility: false,
      },
      FooterR: {
        visibility: false,
        clickability: false,
      },
      HeaderL: {
        visibility: false,
        clickability: false,
      },
      HeaderR: {
        visibility: false,
        clickability: false,
      },
      ButtonMain: {
        visibility: false,
        content: 'START',
      },
      Heading: {
        visibility: true,
      },
      SectionClient: {
        visibility: false,
      },
      SectionServer: {
        visibility: true,
        content: '',
        mode: 'result',
      },
    },
  ],
] as const;

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * scenario > chapter > section => scenario[chapter][section]
 * @returns
 */
export default function useScenario() {
  const [state, setState] = useState({
    chapter: 0,
    section: 0,
  });

  const getSectionObj = useCallback(
    () => scenario[state.chapter][state.section],
    [state],
  );
  const toNextSection = useCallback(() => {
    setState(prevState => {
      const newSectionState = state.chapter + 1;
      const newSubsectionState = state.section + 1;

      if (newSubsectionState < scenario[state.chapter].length) {
        return {
          ...prevState,
          section: newSubsectionState,
        };
      }
      if (newSectionState < scenario.length) {
        return {
          ...prevState,
          chapter: newSectionState,
          section: 0,
        };
      }
      return prevState;
    });
  }, [state]);
  const toLastSection = useCallback(() => {
    setState(prevState => {
      const newSubsectionState = scenario[state.chapter].length - 1;

      return {
        ...prevState,
        section: newSubsectionState,
      };
    });
  }, [state]);
  const isLastSection = useCallback(
    () => state.section === scenario[state.chapter].length - 1,
    [state],
  );

  return {
    subsectionState: state.section,
    getSectionObj,
    toNextSection,
    toLastSection,
    isLastSection,
  };
}
