import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Business from './components/Business';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Business />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;