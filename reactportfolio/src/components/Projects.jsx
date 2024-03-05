import { Link, Route, Routes } from "react-router-dom";
import projects from "../data/projects.json";
import Project from "./Project";

function Projects() {

  const projectLink = projects.map((element) => (
    
      <Link key={element.id}
        to={element.title.toLowerCase()}
        role="button"
        className="btn btn-link"
      >
        {element.title}
      </Link>
      
      ));

      const projectRoute = projects.map((element) => (
      
        <Route key={element.id}
         path={element.title.toLowerCase()}
        // path="/project"
           element={
            <Project
              image={element.image}
              title={element.title}
              repository={element.repository}
              page={element.page}
              description={element.description}
            />
          }
        />
     

  ));

  return (
    <>
      <h3 className="mt-5 text-center">This page shows a collection of my sample projects, each crafted with passion and precision. <br/> Click on a project</h3>
      <div>{projectLink}</div>
      <Routes>
        {projectRoute}
      </Routes>
    </>
  );
}

export default Projects;