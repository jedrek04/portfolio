import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Tools from './components/Tools.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'

export default function App() {
  // glow that follows the mouse on tiles
  useEffect(() => {
    function onMove(e) {
      const tile = e.target.closest('.tile')
      if (!tile) return
      const r = tile.getBoundingClientRect()
      tile.style.setProperty('--mx', e.clientX - r.left + 'px')
      tile.style.setProperty('--my', e.clientY - r.top + 'px')
    }
    document.addEventListener('pointermove', onMove)
    return () => document.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <Tools />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>React · self-hosted in Docker</span>
      </footer>
    </div>
  )
}
