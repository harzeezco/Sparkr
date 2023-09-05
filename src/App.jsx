import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import BlogPage from "./Pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" index element={<HomePage />} />
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
