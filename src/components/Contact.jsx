// src/components/Contact.jsx
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    })
    
    // Replace these with your actual EmailJS service details
    const serviceId = 'service_fhm7upl'
    const templateId = 'template_o5umwkf'
    const publicKey = 'ypl3GUQi0S4q90RM7'
    
    // Use EmailJS to send the email
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        
        // Reset form and set success state
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          error: null
        })
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          error: 'Failed to send message. Please try again later.'
        })
      })
  }

  return (
    <div className="container contact-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contact Me</h2>
      </motion.div>
      
      <motion.p 
        className="contact-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Feel free to reach out to me for freelance opportunities, collaborations, or just to say hello!
      </motion.p>
      
      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <span>📱</span>
            </div>
            <div className="contact-info-text">
              <h3>Phone</h3>
              <p>+91 8754957356</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <span>✉️</span>
            </div>
            <div className="contact-info-text">
              <h3>Email</h3>
              <p>lokeshvlw2004@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <span>📍</span>
            </div>
            <div className="contact-info-text">
              <h3>Location</h3>
              <p>Salem, India</p>
            </div>
          </div>
          
          <div className="contact-social">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a 
                href="https://github.com/lokeshvivek2511" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/lokeshwaran-v-680827257/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://leetcode.com/u/Lokeshwaran_V" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus.isSubmitted && (
              <div className="form-success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {formStatus.error && (
              <div className="form-error">
                {formStatus.error}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact