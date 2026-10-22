import { useState } from 'react';
import { projects, shotsOf } from '../data.js';
import Shot from '../components/Shot.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import NotFound from './NotFound.jsx';

export default function ProjectPage({ id }) {
  const [k, setK] = useState(0);
  const idx = projects.findIndex((p) => p.id === id);
  if (idx < 0) return <NotFound />;

  const p = projects[idx];
  const shots = shotsOf(p);
  const n = shots.length;
  const go = (i) => setK(((i % n) + n) % n);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const cur = shots[k];

  return (
    <>
      <section className="section section--tight">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="#/work">Work</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{p.title}</span>
          </nav>
          <div className="project__head">
            <h1>{p.title}</h1>
            <p className="lede">{p.blurb}</p>
          </div>

          <div
            className="viewer"
            role="group"
            aria-roledescription="carousel"
            aria-label={`${p.title} screens`}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') go(k - 1);
              if (e.key === 'ArrowRight') go(k + 1);
            }}
          >
            <div className="viewer__art" key={k}>
              <Shot project={{ ...cur, title: p.title, ratio: '16 / 10' }} label={cur.caption} eager />
            </div>
            {n > 1 && (
              <>
                <button type="button" className="round viewer__prev" aria-label="Previous screen" onClick={() => go(k - 1)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
                </button>
                <button type="button" className="round viewer__next" aria-label="Next screen" onClick={() => go(k + 1)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}
          </div>
          <p className="viewer__caption" aria-live="polite">
            <strong>{cur.caption}</strong>
            <span>{k + 1} of {n}</span>
          </p>
          {n > 1 && (
            <div className="strip" role="group" aria-label="Choose a screen">
              {shots.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  className={'thumb' + (i === k ? ' is-active' : '')}
                  aria-label={s.caption}
                  aria-current={i === k}
                  onClick={() => setK(i)}
                >
                  <Shot project={{ ...s, title: p.title, ratio: '4 / 3' }} />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section section--tint section--tight">
        <div className="wrap project__body">
          <Reveal>
            <h2>What it does.</h2>
            <ul className="ticks">
              {p.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <dl className="facts">
              <div><dt>Year</dt><dd>{p.year}</dd></div>
              <div><dt>Type</dt><dd>{p.tags.join(', ')}</dd></div>
              <div><dt>Built with</dt><dd>{p.tech.join(', ')}</dd></div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap pager">
          <a href={`#/work/${prev.id}`}>
            <span>Previous project</span>
            <strong>{prev.title}</strong>
          </a>
          <a href={`#/work/${next.id}`} className="pager__next">
            <span>Next project</span>
            <strong>{next.title}</strong>
          </a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
