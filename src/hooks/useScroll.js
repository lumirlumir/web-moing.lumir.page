import { useCallback, useRef } from 'react';

/**
 *
 * @returns
 */
export default function useScroll() {
  /* Hooks */
  // useRef
  const scrollRef = useRef(null);

  /* Func */
  const scroll = useCallback(
    () =>
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      }),
    [],
  );

  /* Return */
  return {
    scrollRef,
    scroll,
  };
}
