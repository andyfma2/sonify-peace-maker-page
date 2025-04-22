
import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('animate-fade-in');
        observer.unobserve(element);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return elementRef;
};
