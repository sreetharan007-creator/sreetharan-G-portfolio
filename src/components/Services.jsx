import { services } from '../data.js';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <h2>What I can help you with.</h2>
        <p className="section__intro">
          Need a front-end developer for your next project, store improvement or bug fix?
        </p>
        <ul className="rows rows--links">
          {services.map((s) => (
            <li className="row" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a className="textlink" href="#contact">
                Ask about this<span className="sr-only">: {s.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
