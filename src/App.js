import React, {useState, useEffect} from "react";
import "./App.css";
import ProjectList from './components/ProjectList';
import Form from './components/Form';

function App() {
  const [inputProject, setInputProject] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const localStorageProjects = JSON.parse(localStorage.getItem('wp-mpa1-ekt'));
    if (localStorageProjects) {
      setProjects(localStorageProjects);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wp-mpa1-ekt', JSON.stringify(projects));
  }, [projects]);

  const completedProject = (id) => {
    setProjects(projects.map((project) => {
      if (project.id === id) {
        return {...project, completed: !project.completed};
      };
      return project;
    }))
  }
  
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  }

  return (
    <>
          <h1 style={{ marginBottom: "100px", color: 'white' }}>My Projects</h1>
          <Form 
            inputProject={inputProject} 
            setInputProject={setInputProject} 
            projects={projects}
            setProjects={setProjects}  
            />
          <ProjectList 
            projects={projects}
            completedProject={completedProject}
            deleteProject={deleteProject}
            />
    </>
  );
}

export default App;
