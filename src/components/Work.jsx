import { useMemo, useState } from 'react';
import { categories, projects } from '../data.js';
import Shot from './Shot.jsx';

const SORTS = [
  ['featured', 'Featured'],
  ['newest', 'Newest first'],
  ['az', 'Name A to Z'],
];

export default function Work({ onOpen }) {
  const [cat, setCat] = useState('All');
  const [sort, setSort] = useState('featured');

  const visible = useMemo(() => {
    const list = cat === 'All' ? [...projects] : projects.filter((p) => p.tags.includes(cat));
    if (sort === 'newest') list.sort((a, b) => b.year - a.year);
    if (sort === 'az') list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [cat, sort]);

  const filtered = cat !== 'All' || sort !== 'featured';
  const reset = () => {
    setCat('All');
    setSort('featured');
  };

  return (
    <section className="section" id="work">
      <div className="wrap">
        <h2>Selected work.</h2>
        <p className="section__intro">
          Filter and sort the projects below, the same way a shopper would on a collection page. Open any project
          for the details.
        </p>

        <div className="toolbar">
          <div className="chips" role="group" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={'chip' + (c === cat ? ' is-active' : '')}
                aria-pressed={c === cat}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="sort">
            <span>Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {SORTS.map(([v, l]) => (
                <option key={v} value={v}>{l}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="applied">
          <p aria-live="polite">
            Showing {visible.length} of {projects.length} projects
          </p>
          {cat !== 'All' && (
            <button type="button" className="pill" onClick={() => setCat('All')}>
              Category: {cat}
              <span aria-hidden="true"> ×</span>
              <span className="sr-only"> (remove filter)</span>
            </button>
          )}
          {filtered && (
            <button type="button" className="textlink textlink--button" onClick={reset}>
              Clear all
            </button>
          )}
        </div>

        {visible.length === 0 ? (
          <p className="empty">No projects match this filter. Clear the filter to see everything.</p>
        ) : (
          <ul className="gallery" key={cat + sort}>
            {visible.map((p, idx) => (
              <li className="gallery__item" key={p.id} style={{ animationDelay: idx * 40 + 'ms' }}>
                <button type="button" className="card" onClick={() => onOpen(visible, idx)}>
                  <Shot project={p} />
                  <span className="card__body">
                    <span className="card__title">{p.title}</span>
                    <span className="card__tags">{p.tags.join(', ')}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
