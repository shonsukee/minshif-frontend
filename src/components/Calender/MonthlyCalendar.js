import React from "react";
import { useParams } from "react-router-dom";
import "../../output.css";
import Headers from "../Partials/_home_header";
import NavigationCalender from "../Partials/_navigation_calender"

export default function Calender() {
	const { year, month } = useParams();

	return (
		<>
			<Headers />
			<NavigationCalender year={year} month={month} />
		</>
	);
}