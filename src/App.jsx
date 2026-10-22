import { useEffect, useRef } from 'react';
import { match, useRoute } from './router.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import WorkPage from './pages/WorkPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { projects } from './data.js';

const TITLES = {
  home: 'Sreetharan G | Front-end developer',
  work: 'Work | Sreetharan G',
  gallery: 'Gallery | Sreetharan G',
  about: 'About | Sreetharan G',
  contact: 'Contact | Sreetharan G',
  missing: 'Page not found | Sreetharan G',
};

export default function App() {
  const route = useRoute();
  const page = match(route);
  const main = useRef(null);
  const first = useRef(true);

  useEffect(() => {
    const project = page.name === 'project' ? projects.find((p) => p.id === page.id) : null;
    document.title = project ? `${project.title} | Sreetharan G` : TITLES[page.name] || TITLES.home;
    window.scrollTo(0, 0);
    // Move focus to the page so keyboard and screen reader users start at the top.
    if (!first.current) main.current?.focus({ preventScroll: true });
    first.current = false;
  }, [route]); // eslint-disable-line react-hooks/exhaustive-deps

  let view;
  switch (page.name) {
    case 'home': view = <Home />; break;
    case 'work': view = <WorkPage />; break;
    case 'project': view = <ProjectPage key={page.id} id={page.id} />; break;
    case 'gallery': view = <GalleryPage />; break;
    case 'about': view = <AboutPage />; break;
    case 'contact': view = <ContactPage />; break;
    default: view = <NotFound />;
  }

  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); main.current?.focus(); }}>
        Skip to content
      </a>
      <Header route={route} />
      <main id="main" tabIndex={-1} ref={main}>
        <div className="page" key={route}>{view}</div>
      </main>
      <Footer />
    </>
  );
}
