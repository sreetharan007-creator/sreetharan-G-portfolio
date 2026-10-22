import Shot from './Shot.jsx';

function Inner({ project }) {
  return (
    <a className="card" href={`#/work/${project.id}`}>
      <Shot project={project} />
      <span className="card__body">
        <span className="card__title">{project.title}</span>
        <span className="card__tags">{project.tags.join(', ')}</span>
      </span>
    </a>
  );
}

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <li className="gallery__item" style={{ animationDelay: delay + 'ms' }}>
      <Inner project={project} />
    </li>
  );
}
ProjectCard.Inner = Inner;
