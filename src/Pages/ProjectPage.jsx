import { Route, Routes } from "react-router-dom";

import Projects from "../Components/projectspage/Projects";
import ProjectDetails from "../Components/projectDetailsPage/ProjectDetails";

const ProjectPage = () => {
  return (
    <main className="bg-colorDark">
      <Routes>
        <Route index element={<Projects />} />
        <Route path="/:id" element={<ProjectDetails />} />
      </Routes>
    </main>
  );
};

export default ProjectPage;
