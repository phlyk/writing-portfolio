import { motion } from 'framer-motion'
import brainTreeLogo from '../assets/brain-tree-logo.png'

const About = () => {
  return (
    <motion.section 
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ 
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)',
        color: 'white',
        paddingTop: '120px'
      }}
    >
      <div className="container">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.img 
            src={brainTreeLogo} 
            alt="About CopyWrite Pro" 
            style={{ 
              width: '80px', 
              height: '80px', 
              marginBottom: '1.5rem',
              borderRadius: '50%',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              border: '3px solid rgba(255, 255, 255, 0.3)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          />
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </motion.div>

        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="card" style={{ color: '#2d3748' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>My Story</h3>
              <p style={{ marginBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="card" style={{ color: '#2d3748' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Skills & Expertise</h3>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Web Copywriting</h4>
                <p style={{ fontSize: '0.9rem', color: '#718096' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel risus ac nulla consectetur molestie.
                </p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Email Marketing</h4>
                <p style={{ fontSize: '0.9rem', color: '#718096' }}>
                  Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget est.
                </p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Content Strategy</h4>
                <p style={{ fontSize: '0.9rem', color: '#718096' }}>
                  Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Conversion Optimization</h4>
                <p style={{ fontSize: '0.9rem', color: '#718096' }}>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <div className="card" style={{ color: '#2d3748' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>My Process</h3>
            <div className="grid grid-3">
              <div>
                <h4 style={{ marginBottom: '1rem', color: '#4facfe' }}>1. Research & Discovery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '1rem', color: '#764ba2' }}>2. Strategy & Planning</h4>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '1rem', color: '#f093fb' }}>3. Writing & Optimization</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
