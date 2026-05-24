import { PROJECTS } from '../data'
import Animate from './Animate'
import SectionHeader from './SectionHeader'

function ProjectCard({ project, index }) {
  return (
    <Animate delay={index * 0.1}>
      <div className="project-card">

        <div className="project-card__top">
          <div className="project-card__tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="project-card__body">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.desc}</p>
        </div>

        <div className="project-card__links">
          {project.github && (
            <a
              href={project.github}
              className="project-card__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-card__link-icon">⌥</span> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="project-card__link project-card__link--accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-card__link-icon">↗</span> Live Demo
            </a>
          )}
        </div>

      </div>
    </Animate>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader overline="What I've built" title="Projects" />

      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      <Animate delay={0.3}>
        <p className="projects__note">
          🚧 More projects coming soon — this section will grow as I build more during my studies.
        </p>
      </Animate>
    </section>
  )
}
