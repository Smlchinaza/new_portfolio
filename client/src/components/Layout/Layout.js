import React from "react";
import { useState } from "react";
import Home from "../../pages/Home/Home.js";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";

const Layout = () => {
  const [toggle, SetToggle] = useState(true);

  //   change toggle function
  const handleToggle = () => {
    SetToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleRight size={30} />
              ) : (
                <AiOutlineDoubleLeft size={30} />
              )}
            </p>
          </div>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
