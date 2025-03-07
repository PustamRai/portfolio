import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;