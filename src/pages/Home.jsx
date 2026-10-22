import { projects } from '../data.js';
import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Screens from '../components/Screens.jsx';
import Services from '../components/Services.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="section">
        <div className="wrap">
          <Reveal className="teaser">
            <div>
              <h2>Recent work.</h2>
              <p className="section__intro">A few projects from the last couple of years. Open one to see its screens.</p>
            </div>
            <a className="textlink" href="#/work">See all work</a>
          </Reveal>
          <ul className="gallery gallery--three">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal as="li" className="gallery__item gallery__item--reveal" delay={i * 90} key={p.id}>
                <ProjectCard.Inner project={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <Screens />
      <Services />
      <CtaBand />
    </>
  );
}
