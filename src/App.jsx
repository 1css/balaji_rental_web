import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Services from './pages/Services/Services.jsx'
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
