import React from "react";

function Project({ project }) {
  return (
    <a
      className="project_wrapper"
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      <i className="fa-solid fa-arrow-right"></i>
      <div className="project_section">
        <img src={project.img} alt="project pic" className="project_pic"></img>
        <div>
          <h5 className="project_name">{project.name}</h5>
          <p className="project_desc">{project.desc}</p>
        </div>
      </div>
      {project.features && (
        <div className="project_feature_container">
          {project.features.map((feat) => {
            return (
              <p className="project_feature" key={feat}>
                {feat}
              </p>
            );
          })}
        </div>
      )}
    </a>
  );
}

export default Project;
