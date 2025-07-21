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
import MobileNav from "./components/MobileNav/MobileNav.js";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout />
                <div className="container">
                  <About />
                  <Education />
                  <Techstack />
                  <Projects />
                  <Work />
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <div className="footer pb-3 ms-3">
          <h6 className="text-center">
            Made With ❤️ by samchuks &copy; 2025
            <span style={{ marginLeft: 16 }}>
              <Link
                to="/privacy-policy"
                style={{ color: "#007bff", textDecoration: "underline", cursor: "pointer", background: "none", border: "none" }}
              >
                Privacy Policy
              </Link>
              <span style={{ marginLeft: 16 }}>
                <Link
                  to="/terms-of-service"
                  style={{ color: "#007bff", textDecoration: "underline", cursor: "pointer", background: "none", border: "none" }}
                >
                  Terms of Service
                </Link>
              </span>
            </span>
          </h6>
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
