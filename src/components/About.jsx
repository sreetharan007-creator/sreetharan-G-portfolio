import { principles } from '../data.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <div>
          <h2>Clean, fast interfaces for real stores.</h2>
          <div className="prose">
            <p>
              I enjoy solving real-world front-end problems and building interfaces that are clean, responsive and
              easy to use.
            </p>
            <p>
              From Shopify customization and product pages to filtering, sorting, cart functionality and responsive
              UI improvements, I work on the details that make a website feel polished.
            </p>
            <p>I am also expanding into React and Node.js to build more modern and scalable web applications.</p>
          </div>
          <a className="textlink" href="#contact">Start a conversation</a>
        </div>
        <dl className="principles">
          {principles.map((p) => (
            <div key={p.title}>
              <dt>{p.title}</dt>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
