import { profile } from '../data.js'

export default function Nav() {
  return (
    <nav>
      <a className="logo" href="#top">
        <span>~/</span>
        <b>{profile.name.toLowerCase()}</b>
      </a>
      <div className="navlinks">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
        <a className="cv" href={profile.cv} download>
          Download CV ↓
        </a>
      </div>
    </nav>
  )
}
