import React from 'react';
import CV from '../../assets/CV.pdf';

const Intro = () => {
  return (
    <div>
      <div className="introduction" id="intro">
        <div className="intro_text">
          <h4>Hi, my name is</h4>
          <h3>Nutsa.</h3>
          <h5>I build things for the web.</h5>
          <button className="cv button">
            <a href={CV} target="_blank" rel="noreferrer">
              CV
            </a>
          </button>
        </div>
      </div>
      <div className="sidebar social_media">
        <a
          href="https://www.linkedin.com/in/nino-kharazishvili-368a441b0/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/nuccaa99" target="_blank" rel="noreferrer">
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
  );
};

export default Intro;
