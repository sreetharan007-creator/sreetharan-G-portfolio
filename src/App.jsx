import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Work from './components/Work.jsx';
import Screens from './components/Screens.jsx';
import Services from './components/Services.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Lightbox from './components/Lightbox.jsx';

export default function App() {
  // `lb` holds the list being browsed and the current position in it.
  const [lb, setLb] = useState(null);
  const open = (list, index) => setLb({ list, index });

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero onOpen={open} />
        <About />
        <Skills />
        <Work onOpen={open} />
        <Screens />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
      {lb && (
        <Lightbox
          list={lb.list}
          index={lb.index}
          onIndex={(index) => setLb({ ...lb, index })}
          onClose={() => setLb(null)}
        />
      )}
    </>
  );
}
