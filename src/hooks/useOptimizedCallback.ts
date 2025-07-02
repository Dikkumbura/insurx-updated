import { useCallback, useRef } from 'react';

// Advanced callback optimization with debouncing
export const useOptimizedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 0
): T => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  return useCallback(
    ((...args: Parameters<T>) => {
      if (delay === 0) {
        return callback(...args);
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    }) as T,
    [callback, delay]
  );
};

// Memoized event handler hook
export const useEventHandler = <T extends (...args: any[]) => any>(
  handler: T,
  dependencies: React.DependencyList
): T => {
  return useCallback(handler, dependencies);
};