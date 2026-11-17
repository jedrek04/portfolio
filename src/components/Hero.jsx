import { profile, links } from '../data.js'

export default function Hero() {
  const t = profile.tagline

  return (
    <header className="hero" id="top">
      <div className="blobs" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </div>

      <h1 className="name">
        Hi, I'm {profile.name}
        <span className="cursor" aria-hidden="true"></span>
      </h1>

      <p className="tagline">
        {t.start}
        <em>{t.highlight}</em>
        {t.middle}
        <strong>{t.strong}</strong>
        {t.end}
      </p>

      <div className="btns">
        <a className="btn primary" href="#contact">Get in touch</a>
        {links.map((link) => (
          <a key={link.url} className="btn" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label} ↗
          </a>
        ))}
      </div>
    </header>
  )
}
