import { Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../../Pages/HomePage";
import AboutPage from "../../Pages/AboutPage";
import ServicesPage from "../../Pages/ServicesPage";
import ProjectPage from "../../Pages/ProjectPage";
import BlogPage from "../../Pages/BlogPage";
import ContactPage from "../../Pages/ContactPage";
import ErrorPage from "../../Pages/ErrorPage";


import { AnimatePresence } from "framer-motion";

// import { useState } from "react";

const AnimateRoute = () => {
  const location = useLocation();

  // const [isHovered, setIsHovered] = useState(false);
  

  return (
   
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicesPage />} />
            <Route path="/project/*" element={<ProjectPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
 
  );
};

export default AnimateRoute;
