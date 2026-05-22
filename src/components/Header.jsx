import { useEffect,useState } from 'react'
import { NAV_LINKS } from '../data'
import { useScrolled } from '../hooks'

function Header({ activeSection, onNavClick }) {
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (section) => {
    onNavClick(section)
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <button className="header-logo" onClick={() => handleClick('About')}>
          MN
        </button>

        <nav className="header-nav">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              className={`header-link${activeSection === link ? ' active' : ''}`}
              onClick={() => handleClick(link)}
            >
              {link}
            </button>
          ))}
        </nav>

        <button
          className="header-burger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation"
        >
          <span /><span /><span />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu_close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              className="mobile-menu_link"
              onClick={() => handleClick(link)}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default Header