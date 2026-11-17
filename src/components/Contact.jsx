import { profile, links } from '../data.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="eyebrow">Contact</div>
      <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
      <div className="btns">
        <a className="btn primary" href={profile.cv} download>Download CV ↓</a>
        {links.map((link) => (
          <a key={link.url} className="btn" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.short} ↗
          </a>
        ))}
      </div>
    </section>
  )
}
