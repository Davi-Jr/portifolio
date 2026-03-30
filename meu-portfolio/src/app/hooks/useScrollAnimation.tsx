import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animation?: 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'fade-in-up';
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', animation = 'slide-up', delay = 0 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, delay]);

  return { ref, isVisible, animation };
}

export function ScrollAnimationWrapper({ 
  children, 
  animation = 'slide-up', 
  delay = 0,
  className = '' 
}: { 
  children: React.ReactNode; 
  animation?: 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'fade-in-up';
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation({ animation, delay });

  return (
    <div 
      ref={ref} 
      className={`scroll-animate ${isVisible ? animation : ''} ${className}`}
    >
      {children}
    </div>
  );
}