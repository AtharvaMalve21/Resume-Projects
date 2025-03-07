import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import ApplyJob from "./pages/ApplyJob";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/apply-job/:id" element={<ApplyJob />} />
    </Routes>
    
  );
};

export default App;
