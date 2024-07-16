import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Introduction/Intro";
import Aboutme from "./components/About/Aboutme";
import Work from "./components/Work/Projects";
import Contact from "./components/Contact/Contact";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Aboutme />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
