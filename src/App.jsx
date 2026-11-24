import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
