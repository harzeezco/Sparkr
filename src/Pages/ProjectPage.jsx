import { Route, Routes } from "react-router-dom";

import Projects from "../Components/projectspage/Projects";
import ProjectDetails from "../Components/projectDetailsPage/ProjectDetails";
import ProjectsPageSchema from "../Components/SEO/schemas/ProjectsPageSchema";

const ProjectPage = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Projects />} />
        <Route path="/:id" element={<ProjectDetails />} />
      </Routes>
      <ProjectsPageSchema />
    </main>
  );
};

export default ProjectPage;
