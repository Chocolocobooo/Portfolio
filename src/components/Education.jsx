import { EDUCATION } from '../data'
import { useInView } from '../hooks'
import SectionHeader from './SectionHeader'

function EduCard({ school, index }) {
  const [ref, visible] = useInView(0.15)

  return (
    <div
      ref={ref}
      className={`card edu-card${school.current ? ' edu-card-current' : ''} animate${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="edu-card-header">
        <div>
          <h3 className="edu-card-school">{school.school}</h3>
          <p className="edu-card-degree">{school.degree}</p>
        </div>
        <div className="edu-card-meta">
          {school.current && <span className="tag">Current</span>}
          <span className="edu-card-period">{school.period}</span>
        </div>
      </div>
      <p className="edu-card-desc">{school.desc}</p>
    </div>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <SectionHeader overline="Academic Background" title="Education" />

      <div className="education-list">
        {EDUCATION.map((school, i) => (
          <EduCard key={school.school} school={school} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Education