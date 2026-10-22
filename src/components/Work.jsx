import { useMemo, useState } from 'react';
import { categories, projects } from '../data.js';
import ProjectCard from './ProjectCard.jsx';

const SORTS = [
  ['featured', 'Featured'],
  ['newest', 'Newest first'],
  ['az', 'Name A to Z'],
];

export default function Work() {
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
    <div className="wrap">
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
        <p aria-live="polite">Showing {visible.length} of {projects.length} projects</p>
        {cat !== 'All' && (
          <button type="button" className="pill" onClick={() => setCat('All')}>
            Category: {cat}
            <span aria-hidden="true"> ×</span>
            <span className="sr-only"> (remove filter)</span>
          </button>
        )}
        {filtered && (
          <button type="button" className="textlink textlink--button" onClick={reset}>Clear all</button>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="empty">No projects match this filter. Clear the filter to see everything.</p>
      ) : (
        <ul className="gallery" key={cat + sort}>
          {visible.map((p, idx) => (
            <ProjectCard key={p.id} project={p} delay={idx * 40} />
          ))}
        </ul>
      )}
    </div>
  );
}
