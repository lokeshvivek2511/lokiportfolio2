import { motion } from 'framer-motion'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-info">
            <div className="footer-logo">
              <span className="logo-text">LW</span>
            </div>
            <p>Full Stack Web Developer with a passion for creating responsive and user-friendly applications.</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p>
              <span className="footer-contact-label">Email:</span>
              <a href="mailto:lokeshvlw2004@gmail.com">lokeshvlw2004@gmail.com</a>
            </p>
            <p>
              <span className="footer-contact-label">Phone:</span>
              <span>+91 8754957356</span>
            </p>
            <p>
              <span className="footer-contact-label">Location:</span>
              <span>Salem, India</span>
            </p>
          </div>
          
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="footer-social-links">
              <a href="https://github.com/lokeshvivek2511" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/lokeshwaran-v-680827257/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://leetcode.com/u/Lokeshwaran_V" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {currentYear} Lokeshwaran V. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer