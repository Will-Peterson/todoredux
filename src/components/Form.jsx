import React from 'react';
import {v4} from 'uuid';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

const Form = ({inputProject, setInputProject, projects, setProjects}) => {

    const handleInputProject = (e) => {
        setInputProject(e.target.value);
    };
    
    const submitProjectInput = (e) => {
        if (inputProject !== '') {
            e.preventDefault();
            setProjects([...projects, {task: inputProject.trim(), completed: false, id: v4()}]);
            setInputProject('');
        } else {
            e.preventDefault();
            return null;
        } 
    };

    const unfinishedProjects = projects.filter(item => item.completed === false).length;
    const finishedProjects = projects.filter(item => item.completed === true).length;
    
    const unfinishedProjectsPlural = () => {if (unfinishedProjects !== 1) return 's'};    
    const finishedProjectsPlural = () => {if (finishedProjects !== 1) return 's'};

    return (
        <>
            <form noValidate autoComplete="off" onSubmit={submitProjectInput}>
              <input
                inputProps={{maxLength: 30}}
                label="Add Project"
                variant="filled"
                color="primary"
                type='text'
                value={inputProject}
                onChange={handleInputProject}
              />

              <button aria-label='delete' type='submit' onClick={submitProjectInput}>
                  <span style={{color: 'black', fontWeight: 'bold'}}>+</span>
              </button>

              <br/>
              <div style={{color: 'white', marginBottom: '50px', float: 'right', fontSize: '.5rem'}}>{30 - inputProject.length} characters remaining</div>
            </form>
            <div style={{color: 'white', float: 'left', fontSize: '.8rem', marginTop: '45px'}} >
                {unfinishedProjects} unfinished project{unfinishedProjectsPlural()} / {finishedProjects} finished project{finishedProjectsPlural()}
            </div>
        </>
    );
}

export default Form;