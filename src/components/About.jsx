import { motion } from 'framer-motion'
import '../styles/About.css'
import resume from "../assets/LOKESHWARAN_RESUME_16_06_25.pdf"; // Adjust path if needed

import myimg from "../assets/WhatsApp Image 2025-03-28 at 19.20.33_eaa63333.jpg"; // Adjust path if needed
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "LOKESHWARAN_RESUME";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const About = () => {
  return (
    <div className="container about-container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
      </motion.div>
      
      <div className="about-content">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-image-container">
            {/* Placeholder for your image */}
            <div className="placeholder">
              {/* <span>Your Image</span>
               */}
               <img src={myimg} alt="" />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>I'm Lokeshwaran, a <span className="highlight">Full Stack Developer</span></h3>
          <p>
            I am a passionate Computer Science and Engineering student from Dr N.G.P. Institute of Technology, Coimbatore, with a strong focus on developing scalable applications.
          </p>
          <p>
            My expertise spans Python, the MERN stack, and various development tools. I enjoy problem-solving and innovation, and I'm always eager to contribute to dynamic projects in a collaborative environment while continuously expanding my skill set.
          </p>
          <p>
            Currently, I'm also working as a freelance web developer, creating customized solutions for clients. I'm passionate about creating clean, efficient code and delivering high-quality applications.
          </p>
          
          <div className="about-details">
            <div className="about-details-item">
              <h4>Name:</h4>
              <p>Lokeshwaran V</p>
            </div>
            <div className="about-details-item">
              <h4>Email:</h4>
              <p>lokeshvlw2004@gmail.com</p>
            </div>
            <div className="about-details-item">
              <h4>Location:</h4>
              <p>Salem, India</p>
            </div>
            <div className="about-details-item">
              <h4>Freelance:</h4>
              <p>Available</p>
            </div>
          </div>
          
          <motion.a 
            href="#" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default About