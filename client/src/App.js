import React from "react";
import Layout from "./components/Layout/Layout.js";
import About from "./pages/About/About.js";
import Techstack from "./pages/Techstack/Techstack.js";
import Projects from "./pages/Projects/Projects.js";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
        <Techstack />
        <Projects />
      </div>
    </div>
  );
}

export default App;
