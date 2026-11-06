import { useEffect, useState } from 'react';
import { profile } from '../data.js';

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Work', '#work'],
  ['Services', '#services'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header__bar">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">S</span>
          <span className="brand__text">
            <strong>Sreetharan</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav id="site-nav" className={'nav' + (open ? ' is-open' : '')} aria-label="Main">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn--small nav__cta" href="#contact" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="menu-btn__bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
