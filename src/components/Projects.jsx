import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Projects.css'
import park from '../assets/parking.png'
import timesheet from '../assets/time.png'
import gpt from '../assets/image.png'
import supplier from '../assets/wheeel.png'

const projectsData = [
  {
    id: 1,
    title: 'Timesheet Management',
    description: 'A full-stack application using React, Node.js (Express), and MongoDB, enabling secure authentication, real-time data updates, and intuitive employee time tracking.',
    image: timesheet,
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: '#',
    codeLink: 'http://github.com/lokeshvivek2511/timesheet-client-react'
  },
  {
    id: 2,
    title: 'GPT Clone',
    description: 'A responsive AI chatbot application using React and Gemini API, featuring real-time responses, dynamic conversational capabilities, and an intuitive UI.',
    image: gpt,
    tags: ['React', 'Gemini API', 'CSS'],
    demoLink: 'https://sage-meringue-519776.netlify.app/',
    codeLink: 'https://github.com/lokeshvivek2511/GPT_Clone'
  },
  {
    id: 3,
    title: 'Supplier Price Calculator',
    description: 'A web application for a logistics company using HTML, CSS, Node.js, and MongoDB, enabling accurate supplier price calculations, dynamic price analysis, and secure data storage.',
    image: supplier,
    tags: ['HTML', 'CSS', 'Node.js', 'MongoDB'],
    demoLink: '#',
    codeLink: 'https://github.com/WheelsOn-logi/Wheelon_logi'
  },
  {
    id: 4,
    title: 'Parking Management System',
    description: 'A parking management system created as a freelance project using PyQt, MongoDB, HTML, and Python, providing efficient parking space management and monitoring.',
    image: park,
    tags: ['PyQt', 'MongoDB', 'HTML', 'Python'],
    demoLink: '#',
    codeLink: 'https://github.com/lokeshvivek2511/parkingManagement-freelancing-'
  }
]

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="container projects-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Projects</h2>
      </motion.div>
      
      <motion.p 
        className="projects-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Here are some of the projects I've worked on, showcasing my skills and expertise in web development and software engineering.
      </motion.p>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectsData.map((project) => (
          <motion.div 
            className="project-card"
            key={project.id}
            variants={projectVariants}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="project-image">
              <div className="placeholder">
                <img src={project.image} alt="he" />
              </div>
              
              <motion.div 
                className="project-overlay"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredId === project.id ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-links">
                {project.demoLink !== "#" && (
                <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>Demo</span>
                </a>
                )}

                  <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>Code</span>
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="projects-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a 
          href="https://github.com/lokeshvivek2511" 
          className="btn btn-outline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View More on GitHub
        </a>
      </motion.div>
    </div>
  )
}

export default Projects