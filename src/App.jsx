import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  // Create refs for each section for smooth scrolling
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const internshipsRef = useRef(null)
  const educationRef = useRef(null)
  const certificationsRef = useRef(null)
  const contactRef = useRef(null)
  
  // Collect all refs for navbar
  const sectionRefs = {
    home: heroRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    internships: internshipsRef,
    education: educationRef,
    certifications: certificationsRef,
    contact: contactRef
  }

  return (
    <div className="app">
      <Navbar sectionRefs={sectionRefs} />
      <main>
        <section id="home" ref={heroRef}>
          <Hero />
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="skills" ref={skillsRef}>
          <Skills />
        </section>
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
        <section id="internships" ref={internshipsRef}>
          <Internships />
        </section>
        {/* <section id="education" ref={educationRef}>
          <Education />
        </section> */}
        <section id="certifications" ref={certificationsRef}>
          <Certifications />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App