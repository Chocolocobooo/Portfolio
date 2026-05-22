import { useEffect, useState } from 'react'
import { SKILLS, LANGUAGES } from '../data'
import { useInView } from '../hooks'
import Animate from './Animate'
import SectionHeader from './SectionHeader'

function Skills() {
  const [langRef, langVisible] = useInView(0.2)
  const [widths, setWidths] = useState({})

  useEffect(() => {
    if (langVisible) {
      const w = {}
      LANGUAGES.forEach(l => { w[l.lang] = l.pct })
      setWidths(w)
    }
  }, [langVisible])

  return (
    <section id="skills" className="section">
      <SectionHeader overline="What I bring" title="Skills & Languages" />

      <div className="skills-grid">

        <Animate delay={0.1}>
          <p className="skills-col-label">Core Skills</p>
          <div className="skills-cards">
            {SKILLS.map(skill => (
              <div key={skill.name} className="skill-card">
                <div className="skill-card-icon">{skill.icon}</div>
                <p className="skill-card-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </Animate>

        <div
          ref={langRef}
          className={`animate${langVisible ? ' visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          <p className="skills-col-label">Languages</p>
          {LANGUAGES.map(lang => (
            <div key={lang.lang} className="lang-bar">
              <div className="lang-bar-header">
                <span className="lang-bar-name">{lang.lang}</span>
                <span className="lang-bar-level">{lang.level}</span>
              </div>
              <div className="lang-bar-track">
                <div
                  className="lang-bar-fill"
                  style={{ width: `${widths[lang.lang] || 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
export default Skills