// Experience.jsx — vertical timeline of work history

import { EXPERIENCE } from '../data'
import { useInView } from '../hooks'
import SectionHeader from './SectionHeader'

function TimelineItem({ job, index, isLast }) {
  const [ref, visible] = useInView(0.15)

  return (
    <div
      ref={ref}
      className={`timeline-item animate${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >

      <div className="timeline-item-track">
        <div className="timeline-item-dot" />
        {!isLast && <div className="timeline-item-line" />}
      </div>

      <div className="card timeline-item-card">
        <div className="timeline-item-header">
          <div>
            <h3 className="timeline-item-title">{job.company}</h3>
            <p className="timeline-item-role">{job.role} · {job.location}</p>
          </div>
          <div className="timeline-item-meta">
            <span className="tag">{job.tag}</span>
            <span className="timeline-item-period">{job.period}</span>
          </div>
        </div>
        <p className="timeline-item-desc">{job.desc}</p>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader overline="Career" title="Work Experience" />

      <div className="timeline">
        {EXPERIENCE.map((job, i) => (
          <TimelineItem
            key={job.company}
            job={job}
            index={i}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
export default Experience