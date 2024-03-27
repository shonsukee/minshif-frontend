import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Static/Home";
import NavigationCalender from "./components/Calender/MonthlyCalendar";
import Login from "./components/GoogleResource/GoogleLogin";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/navigation_calender/:year/:month" element={<NavigationCalender />} />
			</Routes>
		</Router>
	);
};

export default App;
