import { tools } from '../data.js'

export default function Tools() {
  return (
    <div className="marquee" aria-label="Tools I use">
      <div className="track">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
        {/* second copy so the loop has no gap */}
        {tools.map((tool) => (
          <span key={tool + '-copy'} aria-hidden="true">{tool}</span>
        ))}
      </div>
    </div>
  )
}
