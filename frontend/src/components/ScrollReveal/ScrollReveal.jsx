import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

const directions = new Set(['up', 'down', 'left', 'right']);

const toNonNegativeNumber = (value, fallback) => {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, number) : fallback;
};

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 800,
  stagger = 0,
}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const revealDirection = directions.has(direction) ? direction : 'up';
  const revealDuration = toNonNegativeNumber(duration, 800);
  const revealDelay = toNonNegativeNumber(delay, 0);
  const revealStagger = toNonNegativeNumber(stagger, 0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;

    const revealImmediately = () => {
      setIsVisible(true);
      observer?.disconnect();
    };

    if (reducedMotionQuery.matches || !('IntersectionObserver' in window)) {
      revealImmediately();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) revealImmediately();
        },
        { threshold: 0.18 },
      );

      observer.observe(element);
    }

    const handleMotionPreferenceChange = (event) => {
      if (event.matches) revealImmediately();
    };

    reducedMotionQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      observer?.disconnect();
      reducedMotionQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  const classes = [
    'scroll-reveal',
    `scroll-reveal--${revealDirection}`,
    revealStagger > 0 && 'scroll-reveal--stagger',
    isVisible && 'scroll-reveal--visible',
    className,
  ].filter(Boolean).join(' ');

  const revealedChildren = revealStagger > 0
    ? Children.map(children, (child, index) => {
      if (!isValidElement(child)) return child;

      return cloneElement(child, {
        style: {
          ...child.props.style,
          '--scroll-reveal-item-delay': `${revealDelay + (index * revealStagger)}ms`,
        },
      });
    })
    : children;

  return (
    <div
      ref={elementRef}
      className={classes}
      style={{
        '--scroll-reveal-delay': `${revealDelay}ms`,
        '--scroll-reveal-duration': `${revealDuration}ms`,
        '--scroll-reveal-stagger': `${revealStagger}ms`,
      }}
    >
      {revealedChildren}
    </div>
  );
};

export default ScrollReveal;
