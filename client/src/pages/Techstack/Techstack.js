import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../Utils/TechstackList";

const Techstack = () => {
  return (
    <>
      <div className="container techstack">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Tech Stack💻
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including programming languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
        <div className="row">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0 text-center">{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
