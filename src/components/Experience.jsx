import { experience } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="wrap">
        <h2>Where I have worked.</h2>
        <ol className="timeline">
          {experience.map((e, i) => (
            <Reveal as="li" delay={i * 80} key={e.title}>
              <p className="timeline__when">{e.when}</p>
              <div>
                <h3>{e.title}</h3>
                <p className="timeline__where">{e.where}</p>
                {e.text && <p>{e.text}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
