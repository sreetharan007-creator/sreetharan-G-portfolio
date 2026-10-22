export default function PageHead({ title, intro }) {
  return (
    <header className="pagehead">
      <div className="wrap">
        <h1>{title}</h1>
        {intro && <p className="section__intro">{intro}</p>}
      </div>
    </header>
  );
}
