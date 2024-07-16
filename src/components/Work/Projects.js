import React from "react";
import projectData from "./data";
import { nanoid } from "nanoid";

const Projects = () => {
  return (
    <div>
      <div className="my-work section" id="my-work">
        <h2 className="title" id="work-title">
          My work.
        </h2>
        <div className="projects-container">
          {projectData.projects.map((project) => {
            return (
              <a
                key={nanoid()}
                className="project-container"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project.img}
                  alt="project pic"
                  className="project-pic"
                ></img>
                <div>
                  <h5 className="project-name">{project.name}</h5>
                  <p className="project-desc">{project.desc}</p>
                </div>
              </a>
            );
          })}
          <a
            href="https://github.com/nuccaa99?tab=stars"
            target="_blank"
            rel="noreferrer"
            className="see-more button"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
