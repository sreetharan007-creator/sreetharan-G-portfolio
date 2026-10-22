const words = ['JavaScript', 'Shopify', 'Liquid', 'HTML', 'CSS', 'jQuery', 'Responsive UI', 'React', 'Node.js'];

export default function Marquee() {
  const row = (hidden) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w}>
          <span>{w}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" /></svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="group" aria-label="Tools I work with">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
