import { useCallback, useState } from 'react';

import scenario from '@/data/scenario.json';

/* Constants */
const { chapter: CHAPTER } = Object.freeze(scenario);

/**
 * scenario > chapter > section > subsection => scenario[chapter][section][subsection]
 *
 * @returns
 */
const useScenario = () => {
  /* Hooks */
  // useState
  const [state, setState] = useState({
    section: 0,
    subsection: 0,
  });

  /* Func */
  const getSubsectionObj = useCallback(
    () => CHAPTER[state.section][state.subsection],
    [state],
  );
  const toNextSubsection = useCallback(() => {
    setState(prevState => {
      const newSectionState = state.section + 1;
      const newSubsectionState = state.subsection + 1;

      if (newSubsectionState < CHAPTER[state.section].length) {
        return {
          ...prevState,
          subsection: newSubsectionState,
        };
      }
      if (newSectionState < CHAPTER.length) {
        return {
          ...prevState,
          section: newSectionState,
          subsection: 0,
        };
      }
      return prevState;
    });
  }, [state]);
  const toLastSubsection = useCallback(() => {
    setState(prevState => {
      const newSubsectionState = CHAPTER[state.section].length - 1;

      return {
        ...prevState,
        subsection: newSubsectionState,
      };
    });
  }, [state]);

  /* Return */
  return {
    subsectionState: state.subsection,
    getSubsectionObj,
    toNextSubsection,
    toLastSubsection,
  };
};

export default useScenario;
