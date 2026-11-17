import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="eyebrow">Experience</div>
      <div className="xp">
        {experience.map((job) => (
          <div key={job.company + job.role} className="xp-item">
            <div className="xp-when">
              <span className="when">{job.period}</span>
              {job.current && (
                <span className="now-pill">
                  <i></i>current
                </span>
              )}
            </div>

            <div className="xp-body">
              <h3 className="xp-role">
                {job.role}{' '}
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: `var(--${job.color})` }}
                >
                  @ {job.company}
                </a>
              </h3>
              <div className="chips">
                {job.tools.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
