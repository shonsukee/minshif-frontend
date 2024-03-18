import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Static/Home";
import Login from "./components/GoogleResource/GoogleLogin";
import Create from "./components/Store/Create/Create";
import Calender from "./components/Store/Calender/Calender";
import Join from "./components/Store/Join/Join";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/group/create" element={<Create />} />
        <Route path="/join" element={<Join />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </Router>
  );
};

export default App;
