import { PERSONAL } from '../data'
import Animate from './Animate'

function Hero({ onNavClick }) {
  const [firstName, lastName] = PERSONAL.name.split(' ')

  return (
    <section id="about" className="hero section">
      <div className="hero-inner">

        <Animate>
          <div className="hero-row">
            <div>
              <p className="hero-subtitle">{PERSONAL.title}</p>
              <h1 className="hero-name">
                {firstName}<br />{lastName}
              </h1>
              <p className="hero-location">{PERSONAL.location}</p>
              <p className="hero-bio">{PERSONAL.bio}</p>
              <div className="hero-cta">
                <button onClick={() => onNavClick('Contact')} className="btn-primary">
                  Get in Touch
                </button>
                <button className="btn-outline" onClick={() => onNavClick('Experience')}>
                  View Experience
                </button>
              </div>
            </div>
          </div>
        </Animate>

        <Animate delay={0.2}>
          <div className="hero-interests">
            <p className="hero-interests-label">Interests</p>
            <div className="hero-chips">
              {PERSONAL.interests.map(item => (
                <span key={item} className="hero-chip">{item}</span>
              ))}
            </div>
          </div>
        </Animate>

      </div>
    </section>
  )
}
export default Hero