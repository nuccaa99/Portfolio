import React from 'react';
import projectData from './data';
import { nanoid } from 'nanoid';
import Project from './Project';

const Projects = () => {
  return (
    <div>
      <div className="my_work section" id="my-work">
        <h2 className="title">My work.</h2>
        <div className="projects_container">
          {projectData.projects.map((project) => {
            return <Project key={nanoid()} project={project} />;
          })}
          <div className="button_wrapper">
            <a
              href="https://github.com/nuccaa99?tab=stars"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">See more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
