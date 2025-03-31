import { motion } from 'framer-motion'
import '../styles/Hero.css'
import heroimg from "../assets/wmremove-transformed (1).jpeg"; // Adjust path if needed
import resume from "../assets/LOKESHWARAN_RESUME.pdf"; // Adjust path if needed

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "LOKESHWARAN_RESUME.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {

  return (
    <div className="container hero-container">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Hi, I'm <span className="highlight">Lokeshwaran V</span>
          </h1>
          <h3>Full Stack Web Developer</h3>
          <p>Passionate about creating responsive and user-friendly web applications</p>
          <div className="hero-cta">
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="#" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              // Uncomment the following line to enable download functionality
            //   onClick={(e) => {
            //     e.preventDefault()
            //     // Add download CV logic here
            //     alert('CV download will be implemented!')
            //   }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-container">
            {/* Placeholder for your image */}
            <div className="placeholder">
              {/* <span>Your Image</span>s */}
              <img src={heroimg} alt="" />
            </div>
          </div>
        </motion.div>
      </div>
      
     
    </div>
  )
}

export default Hero