import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    //check on mount if the element is already in the DOM
    const rect = el.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight && rect.bottom > 0; //I check basically that margin top is < than the viewport height so the element is not at out of the viewport,
                                                        // and at the same time that margin top + element height(rect.bottom) is >0, so I know the element is
                                                        // at least partially in the viewport (not over it, not at the bottom)

    if (alreadyVisible) {
      setIsVisible(true);
      return; //no need to observe if already visible
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); //only do the animation when first rendering the element, not every time it gets into view
                              // it will still show between routes
      }
    }, options);

    observer.observe(el);

    return () => observer.disconnect(); //clean-up, no memory leak if component unmounts for any reason
  }, [options]);

  return { ref, isVisible };
}
