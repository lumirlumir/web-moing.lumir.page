import { useCallback, useState } from 'react';
import scenario from '@/data/scenario';

/**
 * scenario > chapter > section => scenario[chapter][section]
 * @returns
 */
const useScenario = () => {
  /* Hooks */
  // useState
  const [state, setState] = useState({
    chapter: 0,
    section: 0,
  });

  /* Func */
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

  /* Return */
  return {
    subsectionState: state.section,
    getSectionObj,
    toNextSection,
    toLastSection,
  };
};

export default useScenario;
