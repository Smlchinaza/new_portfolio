import React from "react";
import Layout from "./components/Layout/Layout.js";
import About from "./pages/About/About.js";
import Techstack from "./pages/Techstack/Techstack.js";
import Projects from "./pages/Projects/Projects.js";
import Education from "./pages/Education/Education.js";
import Work from "./pages/WorkExp/WorkExp.js";
import Contact from "./pages/Contact/Contact.js";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
