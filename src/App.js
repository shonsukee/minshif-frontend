import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Static/Home";
import NavigationCalender from "./components/Calender/NavigationCalender";
import Login from "./components/GoogleResource/GoogleLogin";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/navigation_calender" element={<NavigationCalender />} />
			</Routes>
		</Router>
	);
};

export default App;
