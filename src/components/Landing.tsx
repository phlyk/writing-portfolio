import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import brainTreeLogo from '../assets/brain-tree-logo.png'

const Landing = () => {
  return (
    <motion.section 
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.img 
            src={brainTreeLogo} 
            alt="CopyWrite Pro" 
            style={{ 
              width: '120px', 
              height: '120px', 
              marginBottom: '2rem',
              borderRadius: '50%',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              border: '4px solid rgba(255, 255, 255, 0.2)'
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, duration: 0.8, type: "spring", bounce: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            Words That <span style={{ background: 'linear-gradient(45deg, #f093fb, #f5576c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Convert</span>
          </h1>
          <p style={{ fontSize: '1.4rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ marginBottom: '3rem' }}
        >
          <Link to="/hire-me" className="btn btn-primary" style={{ marginRight: '1rem' }}>
            Start Your Project
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-3"
          style={{ marginTop: '4rem' }}
        >
          <div className="card" style={{ textAlign: 'center', color: '#2d3748' }}>
            <h3 style={{ marginBottom: '1rem' }}>Website Copy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel risus ac nulla consectetur molestie. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget est.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center', color: '#2d3748' }}>
            <h3 style={{ marginBottom: '1rem' }}>Email Campaigns</h3>
            <p>
              Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'center', color: '#2d3748' }}>
            <h3 style={{ marginBottom: '1rem' }}>Sales Pages</h3>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Landing
