import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {FaCheck} from 'react-icons/fa';
import {MdDeleteForever} from 'react-icons/md';

const Project = ({project, completedProject, deleteProject}) => {

      const completedHandler = () => {
        completedProject(project.id)
      };

      const deleteHandler = () => {
        deleteProject(project.id)
      }

    return (
        <div>
            <Button variant="contained" color="primary" style={{color: project.completed ? '#888' : null, textDecoration: project.completed ? 'line-through' : null}} >
          <div className="project-container">{project.task}</div>
          <Tooltip title="Mark as Completed">
            <IconButton onClick={completedHandler}>
              <FaCheck style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={deleteHandler}>
              <MdDeleteForever style={{color: 'white'}} />
            </IconButton>
          </Tooltip>
        </Button>
        </div>
    );
}

export default Project;