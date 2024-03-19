import React from "react";
import "../../../output.css";
import Headers from "../Partials/_home_header";

export default function GroupJoin() {
	return (
		<>
			<Headers />
			<div class="mx-auto max-w-container px-4 lg:px-6 lg:px-8 h-5/6">
				<div class="xl:flex xl:flex-wrap xl:flex-row p-5 m-5">
					<div class="flex items-center justify-center whitespace-nowrap basis-4/12">
						<h1 class="text-4xl font-bold pb-2">グループを新規作成</h1>
					</div>
					<div class="flex flex-col items-center justify-center">
						<input
							type="text"
							id="myTextField"
							name="myTextField"
							placeholder="店舗名を入力"
						/>
					</div>
					<div class="flex items-center justify-center">
						<div class="ml-10">
							<button type="submit">作成</button>
						</div>
					</div>
					<div class="flex items-center justify-center">
						<div class="p-5 m-5">
							<a href="/create">グループに参加</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
