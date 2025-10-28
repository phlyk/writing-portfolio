import { motion } from 'framer-motion'
import { useState } from 'react'

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const services = [
    {
      title: "Website Copy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      price: "Starting at $500",
      features: ["Homepage copy", "About page", "Service pages", "Contact page", "SEO optimization"]
    },
    {
      title: "Email Campaigns",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      price: "Starting at $300",
      features: ["Email sequences", "Newsletter content", "Subject line optimization", "A/B testing", "Performance tracking"]
    },
    {
      title: "Sales Pages",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: "Starting at $800",
      features: ["Landing page copy", "Sales funnel content", "CTA optimization", "Conversion tracking", "Split testing"]
    }
  ]

  return (
    <motion.section 
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ 
        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 50%, #f093fb 100%)',
        color: 'white',
        paddingTop: '120px',
        minHeight: '100vh'
      }}
    >
      <div className="container">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Hire Me</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ready to transform your business with compelling copy that converts? Let's work together to achieve your goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-3"
          style={{ marginBottom: '4rem' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="card"
              style={{ color: '#2d3748', textAlign: 'center' }}
              whileHover={{ y: -10 }}
            >
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                {service.title}
              </h3>
              <p style={{ marginBottom: '1.5rem', color: '#4a5568' }}>
                {service.description}
              </p>
              <div style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                color: '#4facfe', 
                marginBottom: '2rem' 
              }}>
                {service.price}
              </div>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                textAlign: 'left' 
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    padding: '0.5rem 0', 
                    borderBottom: '1px solid #e2e8f0',
                    position: 'relative',
                    paddingLeft: '1.5rem'
                  }}>
                    <span style={{ 
                      position: 'absolute',
                      left: '0',
                      color: '#4facfe',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="card"
          style={{ color: '#2d3748', maxWidth: '800px', margin: '0 auto' }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
            Start Your Project
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-2" style={{ marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            <div className="grid grid-2" style={{ marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a service...</option>
                  <option value="website">Website Copy</option>
                  <option value="email">Email Campaigns</option>
                  <option value="sales">Sales Pages</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-2" style={{ marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select budget range...</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="over-5000">Over $5,000</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select timeline...</option>
                  <option value="asap">ASAP</option>
                  <option value="1-2-weeks">1-2 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Project Details *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
                placeholder="Tell me about your project, goals, target audience, and any specific requirements..."
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ 
                  fontSize: '1.1rem',
                  padding: '1rem 3rem'
                }}
              >
                Send Project Details
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HireMe
