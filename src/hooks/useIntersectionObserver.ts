import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (options.triggerOnce) {
          if (isIntersecting && !hasTriggered) {
            setIsVisible(true);
            setHasTriggered(true);
          }
        } else {
          setIsVisible(isIntersecting);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        root: options.root,
        rootMargin: options.rootMargin ?? '0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.root, options.rootMargin, options.triggerOnce, hasTriggered]);

  return { ref: elementRef, isVisible };
};