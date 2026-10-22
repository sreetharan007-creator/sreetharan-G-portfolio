export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Page not found.</h1>
        <p className="section__intro">That page does not exist, or the project was renamed.</p>
        <p style={{ marginTop: 24 }}>
          <a className="btn" href="#/work">See all work</a>
        </p>
      </div>
    </section>
  );
}
