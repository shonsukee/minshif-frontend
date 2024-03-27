import React from "react";
import { Link } from "react-router-dom";
import "../../output.css";

const NavigationCalender = (props) => {
	const { year, month } = props;
	const calenderTable = [];
	var isThisMonth = false;

	// 今月の日数を取得
	const thisMonthDays = new Date(year, Number(month) + 1, 0).getDate();

	// 今月の1日の曜日を取得
	const dayOfWeek = new Date(year, month, 1).getDay();

	//来月の年、月を取得
	let nextMonth = Number(month) + 1;
	let nextMonthYear = year;
	if (nextMonth === 12) {
		nextMonthYear++;
		nextMonth = 0;
	}

	// 先月の年、月、日数を取得
	if (dayOfWeek === 0) isThisMonth = true;
	let lastMonth = month - 1;
	let lastMonthYear = year;
	if (lastMonth === -1) {
		lastMonthYear--;
		lastMonth = 11;
	}
	const lastMonthDays = new Date(lastMonthYear, lastMonth + 1, 0).getDate();

	// 表示する最初の日を設定
	var nextday;
	if (isThisMonth) nextday = 1;
	else nextday = lastMonthDays - (dayOfWeek - 1);

	// 表示するカレンダーの内容を設定
	do {
		const week = [];
		for (let i = 0; i < 7; i++) {
			week.push(nextday);
			nextday++;
			if (!isThisMonth && nextday === lastMonthDays + 1) {
				nextday = 1;
				isThisMonth = true;
			} else if (isThisMonth && nextday === thisMonthDays + 1) {
				nextday = 1;
				isThisMonth = false;
			}
		}
		calenderTable.push(week);
	} while (calenderTable.length < 6);

	return (
		<>
			<div class="mx-auto max-w-container px-4 lg:px-6 lg:px-8 h-5/6">
				<div class="xl:flex xl:flex-wrap xl:flex-row p-5 m-5">
					<Link to={`/navigation_calender/${lastMonthYear}/${lastMonth}`}
						style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
						<span className="sr-only">&lt;</span>
						&lt;
					</Link>
					<Link to={`/navigation_calender/${nextMonthYear}/${nextMonth}`}
						style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
						<span className="sr-only">&gt;</span>
						&gt;
					</Link>
					<div class="flex items-center justify-center whitespace-nowrap basis-4/12">
						<div class="flex justify-center mt-4">
							<table>
								<thead>
									<tr>
										<th>Sun</th>
										<th>Mon</th>
										<th>Tue</th>
										<th>Wed</th>
										<th>Thu</th>
										<th>Fri</th>
										<th>Sat</th>
									</tr>
								</thead>
								<tbody>
									{calenderTable.map((week, index) => (
										<tr key={index} style={{ justifyContent: 'center', padding: '10px' }}>
											{week.map((day, index) => (
												<td key={index} style={{ width: '40px', textAlign: 'center' }}>
													{day}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div >
		</>
	);
}

export default NavigationCalender;