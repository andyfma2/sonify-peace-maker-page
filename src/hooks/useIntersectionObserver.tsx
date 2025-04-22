
import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay to make the animations sequential
        setTimeout(() => {
          element.classList.add('animate-fade-in');
          element.style.opacity = '1';
        }, 100);
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
