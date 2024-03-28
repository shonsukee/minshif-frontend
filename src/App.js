import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Static/Home";
import Login from "./components/GoogleResource/GoogleLogin";
import StoreCreate from "./components/Store/Create";
import StoreJoin from "./components/Store/Join";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store/create" element={<StoreCreate />} />
        <Route path="/store/join" element={<StoreJoin />} />
      </Routes>
    </Router>
  );
};

export default App;
