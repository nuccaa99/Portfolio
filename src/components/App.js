import React from "react";
import Header from "./Header/Header";
import Intro from "./Introduction/Intro"
import Aboutme from "./About/Aboutme";
import Work from "./Work/Projects";
import Contact from "./Contact/Contact";
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
    )

}

export default App;