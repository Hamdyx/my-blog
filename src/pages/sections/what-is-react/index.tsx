import React from 'react';

import SingleTopic from '../singleTopic';
import LandingHeader from '../../landing/LandingHeader';

function WhatIsReact() {
	const summary = {
		title: 'What is React ?',
		notes: [
			'react is a javascript library for buiding modern user interfaces',
			'declarative, component-focused approach',
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

export default WhatIsReact;
