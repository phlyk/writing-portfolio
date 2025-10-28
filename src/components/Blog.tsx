import { motion } from 'framer-motion'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Lorem Ipsum: The Art of Persuasive Writing",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...",
      date: "October 15, 2024",
      readTime: "5 min read",
      category: "Copywriting"
    },
    {
      id: 2,
      title: "Converting Visitors into Customers: A Complete Guide",
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
      date: "October 8, 2024",
      readTime: "8 min read",
      category: "Conversion"
    },
    {
      id: 3,
      title: "Email Marketing That Actually Works",
      excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...",
      date: "September 30, 2024",
      readTime: "6 min read",
      category: "Email Marketing"
    },
    {
      id: 4,
      title: "The Psychology Behind Effective Headlines",
      excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint...",
      date: "September 22, 2024",
      readTime: "7 min read",
      category: "Headlines"
    },
    {
      id: 5,
      title: "Building Trust Through Authentic Storytelling",
      excerpt: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae...",
      date: "September 15, 2024",
      readTime: "4 min read",
      category: "Storytelling"
    },
    {
      id: 6,
      title: "Data-Driven Content: Making Every Word Count",
      excerpt: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat...",
      date: "September 8, 2024",
      readTime: "9 min read",
      category: "Analytics"
    }
  ]

  return (
    <motion.section 
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ 
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #667eea 100%)',
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
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Blog</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover insights, tips, and strategies to improve your copywriting and marketing efforts.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-2"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="card"
              style={{ 
                color: '#2d3748',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              whileHover={{ y: -10 }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <span 
                  style={{ 
                    background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}
                >
                  {post.category}
                </span>
              </div>
              
              <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>
                {post.title}
              </h3>
              
              <p style={{ 
                marginBottom: '1.5rem',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                {post.excerpt}
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                fontSize: '0.9rem',
                color: '#718096'
              }}>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <div className="card" style={{ color: '#2d3748' }}>
            <h3 style={{ marginBottom: '1rem' }}>Stay Updated</h3>
            <p style={{ marginBottom: '2rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Subscribe to get the latest copywriting tips and industry insights delivered to your inbox.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              maxWidth: '400px', 
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <input 
                type="email" 
                placeholder="Enter your email"
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '0.8rem 1rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
              />
              <button 
                className="btn btn-primary"
                style={{ 
                  whiteSpace: 'nowrap',
                  minWidth: 'auto',
                  padding: '0.8rem 1.5rem'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Blog
