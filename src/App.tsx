import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Blog from './components/Blog'
import HireMe from './components/HireMe'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/hire-me" element={<HireMe />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App
