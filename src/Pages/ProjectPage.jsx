import { Route, Routes } from "react-router-dom";

import Projects from "../Components/projectspage/Projects";
import ProjectDetails from "../Components/projectDetailsPage/ProjectDetails";
import ProjectsPageSchema from "../Components/SEO/schemas/ProjectsPageSchema";
import withPageAnimation from "../Components/HOC/withPageAnimation";

const PageWithAnimationProject = withPageAnimation(Projects);
const PageWithAnimationProjectDetails = withPageAnimation(ProjectDetails);

const ProjectPage = () => {
  return (
    <main>
      <Routes>
        <Route index element={<PageWithAnimationProject />} />
        <Route path="/:id" element={<PageWithAnimationProjectDetails />} />
      </Routes>
      <ProjectsPageSchema />
    </main>
  );
};

export default ProjectPage;
