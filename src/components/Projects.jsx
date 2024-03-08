import { Link, Route, Routes } from "react-router-dom";
import projects from "../data/projects.json";
import Project from "./Project";

// This component renders the projects page
function Projects() {
  const styles = {
    linkStyle: {
      color: "#5bb6e7",
    },
  };
  const projectLink = projects.map((element) => (
    <Link
      key={element.id}
      to={element.title.toLowerCase()}
      role="button"
      className="btn btn-link"
      style={styles.linkStyle}
    >
      {element.title}
    </Link>
  ));

  const projectRoute = projects.map((element) => (
    <Route
      key={element.id}
      path={element.title.toLowerCase()}
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
      <h3 className="mt-5 text-center">
        This page shows a collection of my sample projects, each crafted with
        passion and precision. <br /> Click on a project
      </h3>
      <div className="text-center">{projectLink}</div>
      <Routes>
      <Route index element={<Project image={projects[0].image} title={projects[0].title} description={projects[0].description} repository={projects[0].repository} page={projects[0].page} />} />
        {projectRoute}
      </Routes>
    </>
  );
}

export default Projects;
