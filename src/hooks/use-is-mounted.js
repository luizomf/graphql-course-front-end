import { useCallback, useEffect, useRef } from 'react';

/**
 * Tracks if a component is mounted or not
 * @example
 * const isMounted = useIsMounted();
 * @returns {useIsMounted~isMounted} - A getter function
 */
export const useIsMounted = () => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  });

  /**
   * Returns true or false
   * @example
   * if (!isMounted()) return;
   * @returns {Boolean} - Returns true if mounted
   */
  const isMounted = useCallback(() => mounted.current, []);
  return isMounted;
};
