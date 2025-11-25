import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    //ensure layout has settled after navigation
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      
      //check if element is in viewport (with threshold consideration)
      const threshold = (options?.threshold as number) || 0;
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const elementHeight = rect.height;
      const visibleRatio = elementHeight > 0 ? visibleHeight / elementHeight : 0;
      
      const alreadyVisible = visibleRatio >= threshold && rect.top < viewportHeight && rect.bottom > 0;

      if (alreadyVisible) {
        setIsVisible(true);
        return;
      }

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      }, options);

      observer.observe(el);

      return () => observer.disconnect();
    });
  }, [options]);

  return { ref, isVisible };
}