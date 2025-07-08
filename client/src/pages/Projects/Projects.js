import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top 3 projects with live links and source code
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Satoshi AI Website</span>
                <img
                  src="https://github.com/Smlchinaza/new_portfolio/blob/main/client/src/assets/images/satoshi.png?raw=true"
                  alt="satoshi ai website"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Tailwind CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Vercel</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h4 className="text-uppercase">Satoshi AI Website</h4>
                  {/* <p>Quiz App is a simple quiz application.</p> */}
                </div>
                <a className="ad-btn" href="https://satoshi-vision.vercel.app/">
                  view
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Portfolio Website</span>
                <img
                  src="https://github.com/Smlchinaza/new_portfolio/blob/main/client/src/assets/images/portfolio.png?raw=true"
                  alt="portfolio website"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">Tailwind CSS</span>
                <span className="card-detail-badge">NodeJs</span>
                <span className="card-detail-badge">ExpressJs</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h4 className="text-uppercase">Portfolio Website</h4>
                  {/* <p>Quiz App is a simple quiz application.</p> */}
                </div>
                <a className="ad-btn" href="https://new-portfolio-opal-omega.vercel.app/">
                  view
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">social-scribe-waitlist</span>
                <img
                  src="https://github.com/Smlchinaza/new_portfolio/blob/main/client/src/assets/images/Landig%20Page.jpg?raw=true"
                  alt="social-scribe-waitlist"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">NextJs</span>
                <span className="card-detail-badge">TypeScript</span>
                <span className="card-detail-badge">Vercel</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h4 className="text-uppercase">Waitlist Page</h4>
                  {/* <p>Quiz App is a simple quiz application.</p> */}
                </div>
                <a className="ad-btn" href="https://social-scribe-waitlist-launch.vercel.app/">
                  view
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">School Management Website</span>
                <img
                  src={require("../../assets/images/exam-software.png")}
                  alt="school management website"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">NodeJs</span>
                <span className="card-detail-badge">ExpressJs</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h4 className="text-uppercase">School Management Website</h4>
                </div>
                <a className="ad-btn" href="https://exam-software-45ex.vercel.app/">
                  view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
