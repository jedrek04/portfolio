import { projects } from '../data.js'
import Icon from './Icon.jsx'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="eyebrow">Projects</div>
      <div className="pgrid">
        {projects.map((p) => (
          <article
            key={p.github}
            className={`tile ${p.wide ? 'wide' : ''} ${p.featured ? 'featured' : ''}`}
            style={{ '--hue': `var(--${p.color})` }}
          >
            <div className="ptop">
              <div className="ico"><Icon name={p.icon} /></div>
              {p.badge && <span className="badge">{p.badge}</span>}
            </div>

            <h3>
              {p.name}
              {p.accent && <span>{p.accent}</span>}
            </h3>
            <p>{p.description}</p>

            <div className="pfoot">
              <div className="chips">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <a className="go" href={p.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
