import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const { theme, setTheme } = useTheme();
  // Function to toggle the theme between light and dark
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      {/* Main container for the home section */}
      <div className="container-fluid home-container" id="home">
        {/* Theme toggle button */}
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <WiMoonAltThirdQuarter size={30} />
          ) : (
            <BsFillSunFill size={20} />
          )}
        </div>

        {/* Content container for the home section */}
        <div className="container home-content">
          <h2>Hi👋 I am</h2>
          <h1>
            {/* Typewriter effect for dynamic text */}
            <Typewriter
              options={{
                strings: [
                  "Chukwuemeka, Samuel",
                  "A Full-Stack Web Developer",
                  "A MERN Stack Developer",
                  "A Software Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          {/* Buttons for actions */}
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>

            <a className="btn btn-cv" href={Resume} download="Chukwuemeka.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
