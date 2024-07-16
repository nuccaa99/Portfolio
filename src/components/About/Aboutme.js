import React from 'react';
import mypic from './pics/pic.jpg';

const Aboutme = () => {
  return (
    <div className="about-me section" id="about-me">
      <h2 className="title">About me.</h2>
      <div className="content">
        <div className="section-text">
          <div>
            <p className="section-text-name">Hi! My name is Nutsa.</p>
            <ul className="section-text-content">
              <li className="section-text-content-item">
                <span>Front-End Developer:</span> Passionate about creating
                engaging and interactive web experiences.
              </li>
              <li className="section-text-content-item">
                <span>Skills: </span>Solid foundation in HTML, CSS, JavaScript,
                and React.
              </li>
              <li className="section-text-content-item">
                <span>Projects:</span> Developed various personal projects to
                expand skills, including responsive web pages, dynamic user
                interfaces, and complex web applications using React.
              </li>
              <li className="section-text-content-item">
                <span>Design Proficiency:</span> Experienced in using Figma and
                Photoshop for creating visually appealing and user-friendly web
                applications.
              </li>
              <li className="section-text-content-item">
                <span>Problem-Solving:</span> Strong problem-solving abilities
                coupled with a focus on design aesthetics.
              </li>
              <li className="section-text-content-item">
                <span>Career Goals:</span> Excited to embark on a career in
                front-end development, eager to continue learning and growing as
                a developer.
              </li>
            </ul>
          </div>
          <br />
          {/* <dl>
                        <dt>Relevant coursework at University</dt>
                        <dd>Programming Methodologies / Web Development – JavaScript / SQL</dd>
                        <dt>Courses</dt>
                        <dd>Udemy - The Web Developer Bootcamp 2022 </dd>
                        <dd>Udemy - Modern React with Redux</dd>
                        <dd>Freecodecamp - Responsive Web Design / JavaScript Algorithms and Data Structures / Front End
                            Development Libraries</dd>
                        <dd>Scrimba - Advanced React</dd>
                        <dd>CodeCademy - Create an Advanced Web App with React and Redux / Create a Front-End App with
                            React / Learn React</dd>
                        <dd>JetBrains Academy - Frontend Developer</dd>
                        <dd>Udacity - Version Control With Git</dd>
                        <dd>linkedin Learning</dd>
                        <dt>Technologies</dt>
                        <dd>Languages: HTML, CSS (scss), JavaScript </dd>
                        <dd>Frameworks: Bootstrap, Semantic UI </dd>
                        <dd>IDEs: Visual Studio, Webstorm</dd>
                        <dd>Library: React</dd>
                        <dd>Version Control: Git</dd>
                    </dl> */}
        </div>
        <img src={mypic} id="my-pic" alt="mypicture" />
      </div>
    </div>
  );
};

export default Aboutme;
