import { useState } from 'react';
import { profile } from '../data.js';

export default function Contact({ heading: H = 'h2' }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get('name') || '').trim();
    const email = String(f.get('email') || '').trim();
    const message = String(f.get('message') || '').trim();

    const next = {};
    if (!name) next.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Enter an email address like name@example.com.';
    if (!message) next.message = 'Tell me a little about your project.';
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section section--dark" id="contact">
      <div className="wrap contact">
        <div>
          <H>Have a store or a bug that needs attention?</H>
          <p className="section__intro">
            Send a few lines about the project. I will reply by email.
          </p>
          <p className="contact__mail">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" type="text" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
            {errors.name && <p className="field__error" id="e-name">{errors.name}</p>}
          </div>
          <div className="field">
            <label htmlFor="c-email">Email address</label>
            <input id="c-email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} />
            {errors.email && <p className="field__error" id="e-email">{errors.email}</p>}
          </div>
          <div className="field">
            <label htmlFor="c-msg">About your project</label>
            <textarea id="c-msg" name="message" rows="5" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-msg' : undefined} />
            {errors.message && <p className="field__error" id="e-msg">{errors.message}</p>}
          </div>
          <button className="btn btn--gold" type="submit">Send message</button>
          {sent && (
            <p className="form__note" role="status">
              Your email app should open with the message filled in. If it does not, write to {profile.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
