import React from "react";
import Layout from "./components/Layout/Layout.js";
import About from "./pages/About/About.js";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
      </div>
    </div>
  );
}

export default App;
