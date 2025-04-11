import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  // FcVoicePresentation,
  FcBusinessContact,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://github.com/Smlchinaza/new_portfolio/blob/main/client/src/assets/images/profile-pic.jpg?raw=true"
              alt="profile pic"
            />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              {/* Home */}
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcHome />
                  Home
                </Link>
              </div>

              {/* About */}
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcAbout />
                  About
                </Link>
              </div>

              {/* Education */}
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcReadingEbook />
                  Education
                </Link>
              </div>

              {/* Tech stack */}
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>

              {/* Projects */}
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>

              {/* Testimonial */}
              {/* <div className="nav-link">
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcVoicePresentation />
                  Testimonials
                </Link>
              </div> */}

              {/* Work Experience */}
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcPortraitMode />
                  Work Experience
                </Link>
              </div>

              {/* Contacts */}
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Nav Bar Minimize Icon */}
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                {/* Home */}
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcHome title="Home" />
                </Link>
              </div>

              {/* About */}
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcAbout title="About" />
                </Link>
              </div>

              {/* Education */}
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcReadingEbook title="Education" />
                </Link>
              </div>

              {/* Tech stack */}
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcBiotech title="Tech Stack" />
                </Link>
              </div>

              {/* Projects */}
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcVideoProjector title="Projects" />
                </Link>
              </div>

              {/* Testimonials */}
              {/* <div className="nav-link">
                <FcVoicePresentation title="Testimonials" />
              </div> */}

              {/* Work Experience */}
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcPortraitMode title="Work Experience" />
                </Link>
              </div>

              {/* Contacts */}
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                >
                  <FcBusinessContact title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
