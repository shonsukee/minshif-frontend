import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Static/Home";
import Login from "./components/GoogleResource/GoogleLogin";
import GroupCreate from "./components/Store/Create";
import GroupJoin from "./components/Store/Join";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/group/create" element={<GroupCreate />} />
        <Route path="/group/join" element={<GroupJoin />} />
      </Routes>
    </Router>
  );
};

export default App;
