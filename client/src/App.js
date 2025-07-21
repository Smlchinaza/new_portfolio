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
import { useState } from "react";

function App() {
  const { theme } = useTheme();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  return (
    <>
      <div id={theme}>
        <MobileNav />
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
          <h6 className="text-center">
            Made With ❤️ by samchuks &copy; 2025
            <span style={{ marginLeft: 16 }}>
              <button
                style={{ background: "none", border: "none", color: "#007bff", textDecoration: "underline", cursor: "pointer" }}
                onClick={() => setShowPrivacy(true)}
              >
                Privacy Policy
              </button>
              <span style={{ marginLeft: 16 }}>
                <button
                  style={{ background: "none", border: "none", color: "#007bff", textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => setShowTerms(true)}
                >
                  Terms of Service
                </button>
              </span>
            </span>
          </h6>
        </div>
        {showPrivacy && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          }}
            onClick={() => setShowPrivacy(false)}
          >
            <div style={{
              background: "#fff",
              borderRadius: 8,
              maxWidth: 900,
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: 32,
              position: "relative"
            }}
              onClick={e => e.stopPropagation()}
            >
              <button
                style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", fontSize: 24, cursor: "pointer" }}
                onClick={() => setShowPrivacy(false)}
                aria-label="Close Privacy Policy"
              >
                &times;
              </button>
              <PrivacyPolicy />
            </div>
          </div>
        )}
        {showTerms && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          }}
            onClick={() => setShowTerms(false)}
          >
            <div style={{
              background: "#fff",
              borderRadius: 8,
              maxWidth: 900,
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: 32,
              position: "relative"
            }}
              onClick={e => e.stopPropagation()}
            >
              <button
                style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", fontSize: 24, cursor: "pointer" }}
                onClick={() => setShowTerms(false)}
                aria-label="Close Terms of Service"
              >
                &times;
              </button>
              <TermsOfService />
            </div>
          </div>
        )}
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
