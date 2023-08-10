import React from "react";
import mypic from "./pics/pic.jpg"

const Aboutme = () => {
    return (
        <div className="about-me section" id="about-me">
            <h2 className="title">About me.</h2>
            <div className="content">
                <div className="section-text">
                    <div>
                        <p className="section-text-name">Hi! My name is Nutsa.</p>
                        <p className="section-text-info">
                            I am a front-end developer with a passion for creating
                            engaging and interactive web experiences.
                            Throughout my learning journey I have gained a
                            solid foundation in web development technologies such as HTML, CSS, JavaScript and React.
                            I have worked on several personal projects to expand
                            my skill set, including building responsive web pages,
                            creating dynamic user interfaces and complex web applications
                            using React.
                            In addition to my technical skills, I have problem-solving abilities and I
                            enjoy working on design. I am experienced with working with design tools such as Figma and Photoshop to create visually appealing and user-friendly web applications.
                            I am excited to begin my career in front-end development and to continue learning
                            and growing as a developer.
                        </p>
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

    )
}

export default Aboutme; 