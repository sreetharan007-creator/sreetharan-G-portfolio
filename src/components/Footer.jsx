import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__bar">
        <p>
          {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
        <nav aria-label="Footer">
          <a href="#/">Home</a>
          <a href="#/work">Work</a>
          <a href="#/gallery">Gallery</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
