import React from 'react';

import SingleTopic from '../../singleTopic';
import LandingHeader from '../../../landing/LandingHeader';

function ReactVsVanillaJavascript() {
	const summary = {
		title_js: 'vanilla javascript',
		notes_js: [
			`with only javascript we can get the job done but with much more code`,
			`using vanilla javascript we have to describe every single step or action`,
			`this way is called imperative approach, we simply descrbe action after action, step after step`,
			`this way can reach it's limits on more complex applications as we will be reinventing the wheel by wasting time doing repetitive tasks`,
		],
		title_react: 'react',
		notes_react: [
			'with react we can split our code into small building blocks , small reusable components (custom HTML components)',
			`every component should have clear task, therefore your code stays maintainable and manageable and react the library will take do the heavy lifting of rendering components on the screen and combining your code`,
			`while using react we work on a higher level which makes building complex components much easier`,
			`in react we don't have a stet by step instructions, instead we define what we want to have as end result and then we have some placeholders and flexible element that are processed by react to change what's on the screen`,
		],
	};
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic title={summary.title_js} notes={summary.notes_js} />
				<SingleTopic title={summary.title_react} notes={summary.notes_react} />
			</div>
		</main>
	);
}

export default ReactVsVanillaJavascript;
