import { useCallback, useEffect, useRef, useState } from 'react';
import { projects } from '../data.js';
import Shot from './Shot.jsx';
import { useReducedMotion } from '../hooks.js';

const featured = projects.filter((p) => p.featured);
const DELAY = 5500;

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const startX = useRef(null);
  const n = featured.length;
  const auto = !paused && !reduced;

  const go = useCallback((k) => setI(((k % n) + n) % n), [n]);

  useEffect(() => {
    if (!auto) return;
    const id = setTimeout(() => setI((v) => (v + 1) % n), DELAY);
    return () => clearTimeout(id);
  }, [i, auto, n]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') go(i - 1);
    if (e.key === 'ArrowRight') go(i + 1);
  };
  const onPointerDown = (e) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 48) go(i + (dx < 0 ? 1 : -1));
  };

  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="status">
            <span className="status__dot" aria-hidden="true" />
            Open to freelance projects
          </p>
          <h1>I build the parts of a store people actually touch.</h1>
          <p className="lede">
            Front-end developer for Shopify and e-commerce. Product filters, cart drawers, quizzes and mobile
            layouts, built with JavaScript, Liquid, HTML and CSS.
          </p>
          <div className="actions">
            <a className="btn" href="#/work">See the work</a>
            <a className="btn btn--ghost" href="#/contact">Start a project</a>
          </div>
          <p className="tools">JavaScript, Shopify, Liquid, HTML, CSS, jQuery</p>
        </div>

        <div
          className="slider"
          role="group"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={onKeyDown}
        >
          <div
            className="slider__viewport"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (startX.current = null)}
          >
            <div className="slider__track" style={{ transform: `translateX(-${i * 100}%)` }}>
              {featured.map((p, k) => (
                <div
                  className="slide"
                  key={p.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${k + 1} of ${n}`}
                  aria-hidden={k !== i}
                >
                  <div className="slide__art">
                    <Shot project={{ ...p, ratio: '4 / 3' }} eager={k === 0} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider__bar" aria-live={auto ? 'off' : 'polite'}>
            <div className="slider__meta">
              <h2 className="slider__title">{featured[i].title}</h2>
              <p className="slider__tags">{featured[i].tags.join(', ')}</p>
            </div>
            <a className="btn btn--small" href={`#/work/${featured[i].id}`}>
              View project
            </a>
          </div>

          <div className="slider__nav">
            <div className="dots">
              {featured.map((p, k) => (
                <button
                  key={p.id}
                  type="button"
                  className={'dot' + (k === i ? ' is-active' : '')}
                  aria-label={`Show ${p.title}`}
                  aria-current={k === i}
                  onClick={() => go(k)}
                >
                  {k === i && (
                    <span
                      key={`${i}-${auto}`}
                      className={'dot__fill' + (auto ? ' run' : '')}
                      style={{ animationDuration: DELAY + 'ms' }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="arrows">
              <button type="button" className="round" aria-label="Previous project" onClick={() => go(i - 1)}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button type="button" className="round" aria-label="Next project" onClick={() => go(i + 1)}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
