import { createElement, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks.js';

// Fades and lifts its content in the first time it scrolls into view.
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (reduced || !el || !('IntersectionObserver' in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return createElement(
    as,
    { ref, className: `reveal${seen ? ' is-in' : ''} ${className}`.trim(), style: { '--d': delay + 'ms' }, ...rest },
    children
  );
}
