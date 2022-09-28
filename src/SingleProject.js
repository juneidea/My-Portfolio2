import React from 'react';

const SingleProjects = ({project, number, image}) => {
  return(
      <div className="single-project">
        <div className="index">{'0' + (number+1)}</div>
        <div>
          <h3 className="title" >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">{project.active === true ? project.name : <del>{project.name}</del>}</a>
            <img src={image} className="project" alt="project" />
          </h3>
          <p>{project.description}</p>
        </div>
        <div className="tech-stack">{project.tech.map(tech => {
        return <span key={tech} >{tech + ' '}</span>
        })}
        </div>
      </div>
  )
}

export default SingleProjects;