import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects,technologies }) {
   const projectId = projects.map((projects)=> {
   return <ProjectItem key={projects.id} name={projects.name} about={projects.about} technologies={projects.technologies}/>
 
})
console.log(projects)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectId}</div>
    </div>
  );
}

export default ProjectList;
