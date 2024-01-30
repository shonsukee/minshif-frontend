import React from "react";
import '../../output.css';
import Headers from "../Partials/_home_header";

export default function Home() {
	return (
		<>
			<Headers />
			<div class="mx-auto max-w-container px-4 lg:px-6 lg:px-8 h-5/6">
				<div class='xl:flex xl:flex-wrap xl:flex-row p-5 m-5'>
					<div class='flex items-center justify-center whitespace-nowrap basis-4/12'>
						<div>
							<h1 class="text-4xl font-bold pb-2">みんしふへようこそ！</h1>
							<h2 class="text-2xl font-normal pb-4">シフトの変更もラクラク管理。</h2>
							<div class="flex justify-center mt-4">
								<a class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5" href="/login"><span>ログイン <span aria-hidden="true">→</span></span></a>
							</div>
						</div>
					</div>
					<div class='basis-8/12 hidden xl:inline-block'>
						<img src="https://www.calendarsquick.com/printables/pages/images/resp/svg/monthly-5-day-calendar.svg" alt="minshif" />
					</div>
				</div>
			</div>
		</>
	);
}
