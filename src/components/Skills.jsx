// src/components/Skills.jsx
import { motion } from 'framer-motion'
import '../styles/Skills.css'

const skillsData = [
  'Problem Solving (C, Python, Java)',
  'Prompt Engineering',
  'React Development',
  'Node.js',
  'REST API Development',
  'Database Management (SSMS, MongoDB)',
  'DevOps (Git, GitHub, Netlify)',
  '3D Web Designing - Spline'
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="container skills-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Skills</h2>
      </motion.div>
      
      <motion.p 
        className="skills-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I have acquired a diverse range of technical skills throughout my education and project experiences. Here's a showcase of my core competencies:
      </motion.p>
      
      <motion.div 
        className="skills-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsData.map((skill, index) => (
          <motion.div 
            className="skill-item"
            key={index}
            variants={skillVariants}
          >
            <div className="skill-icon">
              <span>⚡</span>
            </div>
            <div className="skill-name">{skill}</div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="skills-cards"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="skill-card">
          <div className="skill-card-icon">
            <span>🚀</span>
          </div>
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React.js</p>
        </div>
        
        <div className="skill-card">
          <div className="skill-card-icon">
            <span>⚙️</span>
          </div>
          <h3>Backend</h3>
          <p>Node.js, Express, Python</p>
        </div>
        
        <div className="skill-card">
          <div className="skill-card-icon">
            <span>🗄️</span>
          </div>
          <h3>Databases</h3>
          <p>MongoDB, SSMS</p>
        </div>
        
        <div className="skill-card">
          <div className="skill-card-icon">
            <span>🔧</span>
          </div>
          <h3>Tools</h3>
          <p>Git, GitHub, Netlify</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Skills