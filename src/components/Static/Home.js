import React from "react";
import '../../output.css';
import Headers from "../Partials/_static_header";
import Button from "../Partials/_arrow_button";

export default function Home() {
	return (
		<>
			<Headers />
			<div className="mx-auto max-w-container px-4 lg:px-6 lg:px-8 h-5/6">
				<div className='xl:flex xl:flex-wrap xl:flex-row p-5 m-5'>
					<div className='flex items-center justify-center whitespace-nowrap basis-4/12'>
						<div>
							<h1 className="text-4xl font-bold pb-2">みんしふへようこそ！</h1>
							<h2 className="text-2xl font-normal pb-4">シフトの変更もラクラク管理。</h2>
							<div className="flex justify-center mt-4">
								<Button name={'ログイン'} href={'/login'}/>
							</div>
						</div>
					</div>
					<div className='basis-8/12 hidden xl:inline-block'>
						<img src="https://www.calendarsquick.com/printables/pages/images/resp/svg/monthly-5-day-calendar.svg" alt="minshif" />
					</div>
				</div>
			</div>
		</>
	);
}
