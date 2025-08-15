import { useCallback, useRef } from 'react';

/**
 *
 * @returns
 */
export default function useContent() {
  /* Hooks */
  // useRef
  const contentRef = useRef(null);

  /* Func */
  const getTextContent = useCallback(() => contentRef.current.innerText, []);
  const getHTMLContent = useCallback(() => contentRef.current.innerHTML, []);
  const setHTMLContent = useCallback(val => {
    contentRef.current.innerHTML = val;
  }, []);

  /* Return */
  return {
    contentRef,
    getTextContent,
    getHTMLContent,
    setHTMLContent,
  };
}
