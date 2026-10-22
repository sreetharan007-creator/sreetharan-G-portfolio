import { skills, learning } from '../data.js';
import Reveal from './Reveal.jsx';

function Row({ item, learning, i }) {
  return (
    <Reveal as="li" delay={i * 60} className={'row' + (learning ? ' row--learning' : '')}>
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="wrap">
        <h2>Tools I build with.</h2>
        <p className="section__intro">
          A practical toolkit built around front-end development, e-commerce and modern web experiences.
        </p>
        <ul className="rows">
          {skills.map((s, i) => <Row key={s.name} item={s} i={i} />)}
        </ul>
        <h3 className="subhead">Learning now</h3>
        <ul className="rows">
          {learning.map((s, i) => <Row key={s.name} item={s} i={i} learning />)}
        </ul>
      </div>
    </section>
  );
}
