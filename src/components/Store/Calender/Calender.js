import React from "react";
import "../../../output.css";
import Headers from "../../Partials/_home_header";

export default function Calender() {
const calenderTable = [];
var isThisMonth = false;

// 今月の日数を取得
const now = new Date();
var year = now.getFullYear();
const month = 9;
const thisMonthDays = new Date(year, month + 1, 0).getDate();

// 今月の1日の曜日を取得
const dayOfWeek = new Date(year, month, 1).getDay();

// 先月の日数を取得
if (dayOfWeek === 0) isThisMonth = true;
var lastMonth = month - 1;
if (lastMonth === -1) {
	year--;
	lastMonth = 11;
}
const lastMonthDays = new Date(year, lastMonth + 1, 0).getDate();

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
} while (isThisMonth);

return (
	<>
	<Headers />
	<div class="mx-auto max-w-container px-4 lg:px-6 lg:px-8 h-5/6">
		<div class="xl:flex xl:flex-wrap xl:flex-row p-5 m-5">
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
					<tr key={index}>
					{week.map((day, index) => (
						<td key={index}>{day}</td>
					))}
					</tr>
				))}
				</tbody>
			</table>
			</div>
		</div>
		</div>
	</div>
	</>
);
}
