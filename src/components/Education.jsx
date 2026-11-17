import { university, highschool } from '../data.js'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="eyebrow">Education</div>
      <div className="edu-list">
        <div className="tile edu">
          <div className="label">
            {university.school}
            <span className="when">{university.period}</span>
          </div>
          <h2>{university.program}</h2>
          <div className="years">
            {university.years.map((y) => (
              <div key={y.label} className={`yr ${y.status}`}>
                <i></i>
                {y.label}
              </div>
            ))}
          </div>
        </div>

        <div className="tile hs">
          <div className="hs-text">
            <div className="label">{highschool.school}</div>
            <h3>{highschool.program}</h3>
          </div>
          <div className="btns">
            <span className="when">{highschool.period}</span>
            <span className="done-pill">completed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
