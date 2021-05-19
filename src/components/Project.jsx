import React from 'react';

const Project = ({project, completedProject, deleteProject}) => {

      const completedHandler = () => {
        completedProject(project.id)
      };

      const deleteHandler = () => {
        deleteProject(project.id)
      }

    return (
        <div>
            <button variant="contained" color="primary" style={{color: project.completed ? '#888' : null, textDecoration: project.completed ? 'line-through' : null}} >
          <div className="project-container">{project.task}</div>
            <button onClick={completedHandler}>Completed
            </button>
            <button onClick={deleteHandler}>Delete
            </button>
        </button>
        </div>
    );
}

export default Project;