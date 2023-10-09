import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const AppLayout = lazy(() => import("../Components/layouts/AppLayout"));
const HomePage = lazy(() => import("../Pages/HomePage"));
const AboutPage = lazy(() => import("../Pages/AboutPage"));
const ServicesPage = lazy(() => import("../Pages/ServicesPage"));
const ProjectPage = lazy(() => import("../Pages/ProjectPage"));
const BlogPage = lazy(() => import("../Pages/BlogPage"));
const ContactPage = lazy(() => import("../Pages/ContactPage"));
const PageNotFound = lazy(() => import("../Pages/PageNotFound"));

const AnimateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/project/*" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AnimateRoute;
