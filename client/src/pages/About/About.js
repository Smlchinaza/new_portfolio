import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
            <img
              src="https://github.com/Smlchinaza/new_portfolio/blob/main/client/src/assets/images/profile-pic.jpg?raw=true"
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I’m a Nigerian web developer with 3 years of hands-on experience
              specializing in building user-friendly and responsive websites.
              Over the years, I’ve worked on multiple projects, both for
              personal learning and as a freelancer sharpening my skills and
              delivering functional, engaging web experiences. What sets me
              apart is my ability to understand the needs of my audience and
              translate that into clean, compelling designs that users enjoy
              interacting with. I take pride in delivering websites that not
              only look great but also provide real value to users and clients
              alike. Feel free to explore some of the projects I’ve worked on,
              each one reflects my commitment to quality and user-centered
              design.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
