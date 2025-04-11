import React from "react";
import Layout from "./components/Layout/Layout.js";
import About from "./pages/About/About.js";
import Techstack from "./pages/Techstack/Techstack.js";
import Projects from "./pages/Projects/Projects.js";
import Education from "./pages/Education/Education.js";
import Work from "./pages/WorkExp/WorkExp.js";
import Contact from "./pages/Contact/Contact.js";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext.js";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Work />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <h5 className="text-center">Made With ❤️ by samchuks &copy; 2025</h5>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
