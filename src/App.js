import React from 'react';
import './styles/index.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <React.Fragment>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  )
}

export default App
