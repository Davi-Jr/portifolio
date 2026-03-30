import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'fade-in-up';
  delay?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  animation = 'slide-up', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) {
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
      { threshold: 0.1, rootMargin: '0px' }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`scroll-animate ${isVisible ? animation : ''} ${className}`}
    >
      {children}
    </div>
  );
}