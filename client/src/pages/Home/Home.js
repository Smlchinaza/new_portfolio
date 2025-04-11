import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <h2>Hi👋 I am</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Chukwuemeka, Samuel",
                  "A Full Stack Web Developer",
                  "A MERN Stack Developer",
                  "A Software Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
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
