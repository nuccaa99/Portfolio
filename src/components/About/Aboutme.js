import React from 'react';
import mypic from '../../assets/About me/mypic.jpg';

const Aboutme = () => {
  return (
    <div className="about_me section" id="about-me">
      <h2 className="title">About me.</h2>
      <div className="section_content">
        <div className="section_text">
          <p className="section_text_name">Hi! My name is Nutsa.</p>
          <ul className="section_text_content">
            <li className="section_text_content_item">
              <span>Front_End Developer:</span> Passionate about creating
              engaging and interactive web experiences.
            </li>
            <li className="section_text_content_item">
              <span>Skills: </span>Solid foundation in HTML, CSS, JavaScript,
              and React.
            </li>
            <li className="section_text_content_item">
              <span>Projects:</span> Developed various personal projects to
              expand skills, including responsive web pages, dynamic user
              interfaces, and complex web applications using React.
            </li>
            <li className="section_text_content_item">
              <span>Design Proficiency:</span> Experienced in using Figma and
              Photoshop for creating visually appealing and user_friendly web
              applications.
            </li>
            <li className="section_text_content_item">
              <span>Problem_Solving:</span> Strong problem_solving abilities
              coupled with a focus on design aesthetics.
            </li>
            <li className="section_text_content_item">
              <span>Career Goals:</span> Excited to embark on a career in
              front-end development, eager to continue learning and growing as a
              developer.
            </li>
          </ul>
        </div>
        <img src={mypic} className="my_pic" alt="mypicture" />
      </div>
    </div>
  );
};

export default Aboutme;
