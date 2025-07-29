import { useState, useEffect } from "react";
import "./style/reset.css";
import "./style/styles.css";
import Header from "./components/Header/Header";
import Intro from "./components/Introduction/Intro";
import Aboutme from "./components/About/Aboutme";
import Education from "./components/Education/Education";
import Work from "./components/Work/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);
  return (
    <div className="app">
      <Header />
      <Intro />
      <Aboutme />
      <Education />
      <Work />
      <Contact />

      {isVisible && (
        <div
          className="mouse-light-main"
          style={{
            position: "fixed",
            left: mousePos.x - 400,
            top: mousePos.y - 400,
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(175, 220, 160, 0.12) 0%, rgba(175, 220, 160, 0.1) 20%, rgba(175, 220, 160, 0.06) 40%, rgba(32, 30, 31, 0.1) 70%, rgba(32, 30, 31, 0.2) 85%, rgba(32, 30, 31, 0.3) 100%)",
            pointerEvents: "none",
            borderRadius: "50%",
            zIndex: 9999,
            filter: "blur(2px)",
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </div>
  );
};

export default App;
