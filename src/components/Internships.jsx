import { motion } from 'framer-motion'
import '../styles/Internships.css'
import wot from '../assets/wot.jpg'
import titan from '../assets/titan.png'
const internshipsData = [
  {
    id: 1,
    company: 'Titan Company Ltd',
    role: 'Intern',
    period: 'Nov 2024 - Dec 2024',
    location: 'Bengaluru',
    description: [
      'Designed and developed a timesheet management application using React and modern front-end tools.',
      'Collaborated with the team to gather requirements and deliver a functional, user-friendly solution.',
      'Gained hands-on experience in building responsive UI components and optimizing application performance.'
    ],
    logo: titan
  },
  {
    id: 2,
    company: 'Wheels on Technologies',
    role: 'Intern',
    period: 'Jul 2024 - Aug 2024',
    location: 'Remote',
    description: [
      'Developed a web-based Supplier Price Calculator to estimate transportation costs using pin codes and package details.',
      'Implemented distance and cost calculation algorithms based on geographical coordinates and database inputs.',
      'Collaborated with logistics and tech teams to ensure accurate, user-friendly cost estimates.'
    ],
    logo: wot
  }
]

const Internships = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  
  const internshipVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="container internships-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Internships</h2>
      </motion.div>
      
      <motion.p 
        className="internships-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My professional experiences have helped me apply classroom knowledge to real-world challenges and develop practical skills.
      </motion.p>
      
      <motion.div 
        className="internships-timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {internshipsData.map((internship, index) => (
          <motion.div 
            className={`internship-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={internship.id}
            variants={internshipVariants}
          >
            <div className="internship-content">
              <div className="internship-header">
                <div className="company-logo">
                  <div className="placeholder">
                    <img src={internship.logo} alt="" />
                  </div>
                </div>
                <div className="internship-title">
                  <h3>{internship.company}</h3>
                  <p className="internship-role">{internship.role}</p>
                  <p className="internship-period">
                    <span className="internship-location">{internship.location}</span> | {internship.period}
                  </p>
                </div>
              </div>
              
              <div className="internship-description">
                <ul>
                  {internship.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Internships