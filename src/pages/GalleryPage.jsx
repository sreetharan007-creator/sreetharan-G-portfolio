import { useState } from 'react';
import { gallery, galleryCategories } from '../data.js';
import PageHead from '../components/PageHead.jsx';
import Shot from '../components/Shot.jsx';
import Lightbox from '../components/Lightbox.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function GalleryPage() {
  const [cat, setCat] = useState('All');
  const [lb, setLb] = useState(null);
  const visible = cat === 'All' ? gallery : gallery.filter((g) => g.category === cat);

  return (
    <>
      <PageHead
        title="Gallery."
        intro="Screens from storefronts, carts, campaigns and phones. Click any image to look closer, then use the arrow keys to move through them."
      />
      <section className="section section--tight">
        <div className="wrap">
          <div className="chips" role="group" aria-label="Filter images by category">
            {['All', ...galleryCategories].map((c) => (
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
          <div className="applied">
            <p aria-live="polite">Showing {visible.length} of {gallery.length} images</p>
          </div>

          <ul className="gallery" key={cat}>
            {visible.map((g, i) => (
              <li className="gallery__item" key={g.id} style={{ animationDelay: i * 35 + 'ms' }}>
                <button type="button" className="card" onClick={() => setLb({ index: i })}>
                  <Shot project={g} />
                  <span className="card__body">
                    <span className="card__title">{g.title}</span>
                    <span className="card__tags">{g.category}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
      {lb && (
        <Lightbox
          list={visible}
          index={lb.index}
          onIndex={(index) => setLb({ index })}
          onClose={() => setLb(null)}
        />
      )}
    </>
  );
}
