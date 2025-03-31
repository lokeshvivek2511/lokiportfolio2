import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/Navbar.css'

const Navbar = ({ sectionRefs }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section
      const scrollPosition = window.scrollY + 100
      
      // Get all sections
      const sections = Object.keys(sectionRefs)
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const ref = sectionRefs[section]
        
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionRefs])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId]
    if (section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <div className="logo">
          <a href="#home" onClick={() => scrollToSection('home')}>
            <span className="logo-text">LW</span>
          </a>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            {Object.keys(sectionRefs).map((section) => (
              <motion.li 
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={`#${section}`}
                  className={activeSection === section ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section)
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar