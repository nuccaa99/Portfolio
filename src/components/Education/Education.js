import React, { useState } from 'react';

const Education = () => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div className="education section" id="education">
      <h2 className="title">Education.</h2>
      <div className="section_content_container">
        <ul className="section_text_content education left">
          <li className="section_text_content_item">
            <p>Free University of Tbilisi | 2017-2021</p>
            <p>Bachelor of Business Administration (ESM)</p>
            <p>
              Relevant coursework in Programming: Programming Methodologies, Web
              Development – JavaScript, Working with Databases - SQL
            </p>
          </li>
          <li className="section_text_content_item">
            <p>Coursera</p>
            <p>Meta Front-End Developer Professional Certificate</p>
          </li>

          <li className="section_text_content_item">
            <p>Udemy</p>
            <p>The Web Developer Bootcamp 2024</p>
            <p>Modern React with Redux</p>
          </li>

          <li
            className={
              hidden
                ? 'section_text_content_item hidden'
                : 'section_text_content_item'
            }
          >
            <p>edX</p>
            <p>Exploring GraphQL: A Query Language for APIs</p>
          </li>

          <li
            className={
              hidden
                ? 'section_text_content_item hidden'
                : 'section_text_content_item'
            }
          >
            <p>Codecademy</p>
            <p>Create an Advanced Web App with React and Redux</p>
            <p>Learn jQuery</p>
            <p>Learn TypeScript</p>
            <p>Create a Front-End App with React</p>
            <p>Learn React</p>
          </li>
        </ul>
        <ul className="section_text_content education">
          <li className="section_text_content_item">
            <p>Academy Of Digital Industries</p>
            <p>Front-End Development (HTML, CSS, JavaScript, React)</p>
          </li>
          <li className="section_text_content_item">
            <p>Scrimba</p>
            <p>Frontend Career Path</p>
            <p>Advanced React</p>
          </li>
          <li className="section_text_content_item">
            <p>JetBrains Academy</p>
            <p>JavaScript for Beginners</p>
          </li>
          <li
            className={
              hidden
                ? 'section_text_content_item hidden'
                : 'section_text_content_item'
            }
          >
            <p>Microsoft Training</p>
            <p>Build JavaScript applications using TypeScript</p>
          </li>
          <li
            className={
              hidden
                ? 'section_text_content_item hidden'
                : 'section_text_content_item'
            }
          >
            <p>Udacity</p>
            <p>Version Control With Git</p>
          </li>
          <li
            className={
              hidden
                ? 'section_text_content_item hidden'
                : 'section_text_content_item'
            }
          >
            <p>FreeCodeCamp</p>
            <p>Responsive Web Design</p>
            <p>JavaScript Algorithms and Data Structures</p>
            <p>Front End Development Libraries</p>
          </li>
        </ul>
      </div>
      <div className="button_wrapper">
        <button className="button" onClick={toggleHidden}>
          {hidden ? 'See more' : 'See less'}
        </button>
      </div>
    </div>
  );
};

export default Education;
