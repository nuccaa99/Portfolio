import React from "react";
import resume from "../../assets/Resume.pdf";

const Intro = () => {
  return (
    <div>
      <div className="introduction" id="intro">
        <div className="intro-text">
          <h4>Hi, my name is</h4>
          <h3>Nutsa.</h3>
          <h5>I build things for the web.</h5>
          <a
            href={resume}
            className="button"
            id="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="sidebar">
        <div id="social-media">
          <a
            href="https://www.linkedin.com/in/nino-kharazishvili-368a441b0/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/nuccaa99"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" target="_blank"></i>
          </a>
          <a
            href="https://codepen.io/nuccaa99/pens/public"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-codepen"></i>
          </a>
          <a
            href="https://www.instagram.com/nuccaa/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
