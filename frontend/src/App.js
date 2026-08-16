import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App">
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          <NavigationBar />
          <main className="bento-container">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;