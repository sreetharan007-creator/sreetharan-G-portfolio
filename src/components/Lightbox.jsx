import { useEffect, useRef } from 'react';
import Shot from './Shot.jsx';

// Works for any item with title, kind, tone, image and optional
// category, caption, details, tech, projectId.
export default function Lightbox({ list, index, onIndex, onClose }) {
  const closeRef = useRef(null);
  const p = list[index];
  const n = list.length;
  const go = (k) => onIndex(((k % n) + n) % n);

  useEffect(() => {
    const prev = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      prev?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') go(index - 1);
      if (e.key === 'ArrowRight') go(index + 1);
      if (e.key === 'Tab') {
        const box = document.querySelector('.lightbox__panel');
        const f = box ? [...box.querySelectorAll('button, a[href]')] : [];
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div className="lightbox" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="lightbox__panel" role="dialog" aria-modal="true" aria-labelledby="lb-title">
        <button ref={closeRef} type="button" className="round lightbox__close" onClick={onClose} aria-label="Close image">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <div className="lightbox__stage">
          <button type="button" className="round lightbox__prev" aria-label="Previous image" onClick={() => go(index - 1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <div className="lightbox__art" key={p.id}>
            <Shot project={{ ...p, ratio: '4 / 3' }} eager />
          </div>
          <button type="button" className="round lightbox__next" aria-label="Next image" onClick={() => go(index + 1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="lightbox__info">
          <p className="lightbox__count">
            {index + 1} of {n}{p.category ? `, ${p.category}` : ''}
          </p>
          <h2 id="lb-title">{p.title}</h2>
          {(p.caption || p.blurb) && <p>{p.caption || p.blurb}</p>}
          {p.details && (
            <ul className="ticks">
              {p.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          )}
          {p.tech && <p className="lightbox__tech">Built with {p.tech.join(', ')}</p>}
          {p.projectId ? (
            <a className="btn btn--small" href={`#/work/${p.projectId}`} onClick={onClose}>Open the project</a>
          ) : (
            <a className="btn btn--small" href="#/contact" onClick={onClose}>Discuss a similar project</a>
          )}
        </div>

        <div className="thumbs" role="group" aria-label="Choose an image">
          {list.map((q, k) => (
            <button
              key={q.id}
              type="button"
              className={'thumb' + (k === index ? ' is-active' : '')}
              aria-label={q.title}
              aria-current={k === index}
              onClick={() => onIndex(k)}
            >
              <Shot project={{ ...q, ratio: '4 / 3' }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
