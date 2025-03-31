import { motion } from 'framer-motion'
import '../styles/Certifications.css'

const certificationsData = [
  "MERN Stack in Frenzo-Academy",
  "NPTEL Cloud Computing (Elite+Silver)",
  "NPTEL Ethical Hacking (Elite)",
  "Python in Coursera",
  "Series of Web Development Certificates by Barathiar University",
  "Prompt Engineering in AWS"
]

const accomplishmentsData = [
  "Solved 275+ LeetCode Problems to Strengthen Algorithmic Skills",
  "Achieved 100-Day LeetCode Daily Challenge Completion",
  "Earned 50K Hackos on HackerRank through Problem-Solving Excellence"
]

const achievementsData = [
  "First Place in Carta Presentara, a paper presentation event at SKCT, Coimbatore",
  "First Place in Buzz Blitz, a product launch event at SKCT, Coimbatore",
  "Second Place in Reverse Engineering by Yu-Yuva Club in NGPIT",
  "Second Place in De-Cipher, a debugging event at SKCT, Coimbatore",
  "Participant in SIH 2024",
  "Completed a 5-day Bootcamp on Microsoft Azure conducted by Pinesphere solutions"
]

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="container certifications-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Certifications & Achievements</h2>
      </motion.div>
      
      <div className="certifications-content">
        <div className="certifications-grid">
          <motion.div 
            className="cert-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Certifications</h3>
            <motion.ul 
              className="cert-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certificationsData.map((cert, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                >
                  {cert}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="cert-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Accomplishments</h3>
            <motion.ul 
              className="cert-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {accomplishmentsData.map((acc, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                >
                  {acc}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="achievements-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Awards & Achievements</h3>
          <motion.ul 
            className="achievements-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievementsData.map((achievement, index) => (
              <motion.li 
                key={index}
                className="achievement-item"
                variants={itemVariants}
              >
                <div className="achievement-icon">🏆</div>
                <div className="achievement-text">{achievement}</div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications