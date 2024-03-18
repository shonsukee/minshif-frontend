import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Static/Home";
import Calender from "./components/Calender/Calender";
import Login from "./components/GoogleResource/GoogleLogin";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/calender" element={<Calender />} />
			</Routes>
		</Router>
	);
};

export default App;
