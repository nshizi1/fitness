import React from 'react';
import './styles/index.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  )
}

export default App
