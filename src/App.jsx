import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import BlogPage from "./Pages/BlogPage";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
