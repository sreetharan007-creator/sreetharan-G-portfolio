import { useEffect, useState } from 'react';
import { profile } from '../data.js';

const links = [
  ['Home', '/'],
  ['Work', '/work'],
  ['Gallery', '/gallery'],
  ['About', '/about'],
];

export default function Header({ route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const close = () => setOpen(false);
  const current = (path) => (path === '/' ? route === '/' : route.startsWith(path));

  return (
    <header className={'header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="wrap header__bar">
        <a className="brand" href="#/" onClick={close}>
          <span className="brand__mark" aria-hidden="true">S</span>
          <span className="brand__text">
            <strong>Sreetharan</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav id="site-nav" className={'nav' + (open ? ' is-open' : '')} aria-label="Main">
          {links.map(([label, path]) => (
            <a key={path} href={`#${path}`} aria-current={current(path) ? 'page' : undefined} onClick={close}>
              {label}
            </a>
          ))}
          <a className="btn btn--small nav__cta" href="#/contact" aria-current={route === '/contact' ? 'page' : undefined} onClick={close}>
            Contact
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
