import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/Navbar';
import Animated3D from './components/Animated3D';
import Footer from './components/Footer';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import profileImg from './assets/profile.jpg'; // Add your photo to src/assets/profile.jpg
import './App.css'

function Home() {
  return (
    <section className="home-hero-section">
      <div className="hero-photo">
        <img src={profileImg} alt="My Profile" className="hero-img" />
      </div>
      <div className="hero-about">
        <h1>Hi, I'm [Your Name]</h1>
        <p className="hero-desc">
          Welcome to my portfolio! I'm a passionate web developer pursuing a BS degree from IIT Madras. I love building beautiful and interactive web experiences, exploring new tech, and collaborating on creative projects.
        </p>
      </div>
    </section>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
