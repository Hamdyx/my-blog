import React from 'react';
import LandingHeader from '../../../landing/LandingHeader';
import SingleTopic from '../../singleTopic';

function LetAndConst() {
	const summary = {
		title: 'Let and Const',
		notes: [
			`let and const are different ways for creating variables`,
			`let is the so called new var`,
			`let is for creating variables that are going to be reassigned or change values afterwards`,
			`use const for creating constants which going to be assigned once and never change`,
		],
	};

	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic title={summary.title} notes={summary.notes} />
			</div>
		</main>
	);
}

export default LetAndConst;
