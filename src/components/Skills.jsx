import { skills, learning } from '../data.js';

function Row({ item, learning }) {
  return (
    <li className={'row' + (learning ? ' row--learning' : '')}>
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </li>
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
          {skills.map((s) => <Row key={s.name} item={s} />)}
        </ul>
        <h3 className="subhead">Learning now</h3>
        <ul className="rows">
          {learning.map((s) => <Row key={s.name} item={s} learning />)}
        </ul>
      </div>
    </section>
  );
}
