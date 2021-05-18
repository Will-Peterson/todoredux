import React from 'react';
import Project from './Project';

const ProjectList = ({projects, updateProject, completedProject, deleteProject}) => {

  return (
    <div>
      {projects.map((project) => (
        <Project 
          project={project}
          updateProject={updateProject}
          completedProject={completedProject}
          deleteProject={deleteProject}
          key={project.id}
        />
      ))}
    </div>
  );
} 

export default ProjectList;