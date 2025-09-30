import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ApplyJob from "./Pages/ApplyJob";
import Application from "./Pages/Application";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/apply-job" element={<ApplyJob />} />
      </Routes>
    </div>
  );
};

export default App;
