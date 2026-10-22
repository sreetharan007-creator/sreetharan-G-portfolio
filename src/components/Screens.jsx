import { useCallback, useEffect, useRef, useState } from 'react';
import { screens } from '../data.js';
import PhoneScreen from './PhoneScreen.jsx';
import { TONES } from '../tones.js';
import { useReducedMotion } from '../hooks.js';

export default function Screens() {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const reduced = useReducedMotion();

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const move = (dir) => {
    const el = track.current;
    el?.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <section className="section section--dark" id="screens">
      <div className="wrap">
        <div className="screens__head">
          <div>
            <h2>On a phone.</h2>
            <p className="section__intro">
              Most shoppers arrive on a phone, so these screens get the most attention. Swipe or use the arrows.
            </p>
          </div>
          <div className="arrows">
            <button type="button" className="round round--light" aria-label="Scroll screens left" disabled={edge.start} onClick={() => move(-1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button type="button" className="round round--light" aria-label="Scroll screens right" disabled={edge.end} onClick={() => move(1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="reel"
        ref={track}
        onScroll={measure}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Phone screens"
      >
        {screens.map((s) => (
          <figure className="phone" key={s.id}>
            <div
              className="phone__frame"
              style={{
                // the dark tone matches the section background, so lift its bezel
                borderColor: s.tone === 'ink' ? TONES.ink.soft : TONES[s.tone].bg,
                background: TONES[s.tone].panel,
              }}
            >
              <PhoneScreen kind={s.kind} tone={s.tone} />
            </div>
            <figcaption>
              <strong>{s.title}</strong>
              <span>{s.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
