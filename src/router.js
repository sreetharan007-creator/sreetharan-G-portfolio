import { useEffect, useState } from 'react';

// Hash routing (#/work, #/work/cart-drawer). It needs no server setup,
// so it works on GitHub Pages and when the site is opened from a folder.
function read() {
  const raw = window.location.hash.replace(/^#\/?/, '').split('?')[0].replace(/\/+$/, '');
  return '/' + raw;
}

export function useRoute() {
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

export function match(route) {
  if (route === '/') return { name: 'home' };
  if (route === '/work') return { name: 'work' };
  const m = route.match(/^\/work\/([\w-]+)$/);
  if (m) return { name: 'project', id: m[1] };
  if (route === '/gallery') return { name: 'gallery' };
  if (route === '/about') return { name: 'about' };
  if (route === '/contact') return { name: 'contact' };
  return { name: 'missing' };
}
