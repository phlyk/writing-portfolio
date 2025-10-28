import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import brainTreeLogo from '../assets/brain-tree-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Hire Me', path: '/hire-me' }
  ]

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img 
          src={brainTreeLogo} 
          alt="CopyWrite Pro Logo" 
          style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }} 
        />
        <span>CopyWrite Pro</span>
      </Link>
      
      <ul className="navbar-nav">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div 
        className="mobile-menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
        >
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
