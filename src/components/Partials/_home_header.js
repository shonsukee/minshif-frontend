import React from 'react';
import '../../output.css';

const HomeHeader = () => {
  return (
    <header class="relative z-50 w-full flex-none text-xl font-semibold leading-6 text-slate-900">
		<nav class="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
			<div class="relative flex flex-wrap justify-between p-5 m-5">
				<div class="w-3/12">
					<a href="/" class="flex-none text-slate-900">
						<span class="sr-only">minshif</span>
						minshif
					</a>
				</div>

				<div class="flex flex-none justify-end items-center">
					<div class="flex flex-wrap whitespace-nowrap">
						<a class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5" href="/login"><span>ログイン <span aria-hidden="true">→</span></span></a>
					</div>
				</div>
				<div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
			</div>
		</nav>
    </header>
  );
};

export default HomeHeader;
