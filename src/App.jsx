import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [activeSection, setActiveSection] = useState('About')

  const scrollTo = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(section)
  }

  return (
    <div>
      <Header activeSection={activeSection} onNavClick={scrollTo} />
      <main>
        <Hero onNavClick={scrollTo}/>
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
