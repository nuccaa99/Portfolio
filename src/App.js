import React from 'react';
import './style/reset.css';
import './style/styles.css';
import Header from './components/Header/Header';
import Intro from './components/Introduction/Intro';
import Aboutme from './components/About/Aboutme';
import Education from './components/Education/Education';
import Work from './components/Work/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Aboutme />
      <Education />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
