import { motion } from 'framer-motion'
import brainTreeLogo from '../assets/brain-tree-logo.png'

const Footer = () => {
  return (
    <motion.footer 
      style={{
        background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
        color: 'white',
        padding: '3rem 2rem 2rem',
        marginTop: 'auto'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img 
                src={brainTreeLogo} 
                alt="CopyWrite Pro Logo" 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                }} 
              />
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>
                CopyWrite Pro
              </h3>
            </div>
            <p style={{ color: '#a0aec0', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transforming businesses through compelling copy that converts visitors into customers.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                  Website Copy
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                  Email Campaigns
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                  Sales Pages
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                  Content Strategy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <a 
                href="#" 
                style={{ 
                  color: '#a0aec0', 
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
              >
                📧
              </a>
              <a 
                href="#" 
                style={{ 
                  color: '#a0aec0', 
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
              >
                💼
              </a>
              <a 
                href="#" 
                style={{ 
                  color: '#a0aec0', 
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
              >
                🐦
              </a>
              <a 
                href="#" 
                style={{ 
                  color: '#a0aec0', 
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
              >
                📱
              </a>
            </div>
            <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>
              hello@copywritepro.com<br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #4a5568', 
          paddingTop: '2rem',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#a0aec0', fontSize: '0.9rem', margin: 0 }}>
            © 2024 CopyWrite Pro. All rights reserved. Lorem ipsum dolor sit amet.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '0.9rem' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '0.9rem' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
