import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container project">
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
                  src="https://github.com/Smlchinaza/new_portfolio/blob/main/client/src/assets/images/profile-pic.jpg?raw=true"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Vercel</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h4 className="text-uppercase">Quiz App</h4>
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
                <span className="card-notify-badge">Satoshi AI Website</span>
                <img
                  src="https://github.com/Smlchinaza/new_portfolio/blob/main/client/src/assets/images/profile-pic.jpg?raw=true"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Vercel</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h4 className="text-uppercase">Quiz App</h4>
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
                <span className="card-notify-badge">Satoshi AI Website</span>
                <img
                  src="https://github.com/Smlchinaza/new_portfolio/blob/main/client/src/assets/images/profile-pic.jpg?raw=true"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Vercel</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h4 className="text-uppercase">Quiz App</h4>
                  {/* <p>Quiz App is a simple quiz application.</p> */}
                </div>
                <a className="ad-btn" href="https://satoshi-vision.vercel.app/">
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
