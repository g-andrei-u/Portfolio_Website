import { useEffect, RefObject } from 'react';

export const Animation = (element: RefObject<any>) => {

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entrie) => {
      if(entrie.isIntersecting) {

        entrie.target.classList.add('animation');
      }
    });
  });

  useEffect(() => {
    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current);
      }
    };
  }, [observer]);
}