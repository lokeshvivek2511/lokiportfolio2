import { motion } from 'framer-motion'
import '../styles/Education.css'

const educationData = [
  {
    id: 1,
    degree: 'Computer Science and Engineering',
    institution: 'Dr N.G.P. Institute of Technology',
    location: 'Coimbatore',
    period: '2022 - Present',
    grade: '8.6 CGPA (till 5th semester)',
    type: 'UG'
  },
  {
    id: 2,
    degree: 'HSC',
    institution: 'Swami Sivananda Hr Sec School',
    location: 'Coimbatore',
    period: '2022',
    grade: '80%',
    type: 'HSC'
  },
  {
    id: 3,
    degree: 'SSLC',
    institution: 'Rasi Matriculation Hr Sec. School',
    location: 'Salem',
    period: '2020',
    grade: '86%',
    type: 'SSLC'
  }
]

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  
  const educationVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="container education-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Education</h2>
      </motion.div>
      
      <motion.p 
        className="education-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My educational journey has provided me with a strong foundation in computer science and engineering principles.
      </motion.p>
      
      <motion.div 
        className="education-timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {educationData.map((education) => (
          <motion.div 
            className="education-item"
            key={education.id}
            variants={educationVariants}
          >
            <div className="education-content">
              <div className="education-type">{education.type}</div>
              <h3>{education.degree}</h3>
              <div className="education-info">
                <p className="education-institution">{education.institution}</p>
                <p className="education-location">{education.location}</p>
                <p className="education-period">{education.period}</p>
              </div>
              <div className="education-grade">
                <span>{education.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Education