import React from 'react';
import SingleTopic from '../../singleTopic/index';
import LandingHeader from '../../../landing/LandingHeader';

function WhyUseReact() {
	const summary = {
		title: 'Why do we use React ?',
		notes: [
			`mobile apps and desktop apps feels very reactive: things happen
				instantly, you don't wait for new pages to load or actions to
				start`,
			`traditionally, in web apps, you click a link and wait for a new
				page to load, you click a button and wait for some action to
				complete`,
			`users send HTML requests to the server and wait for a response for
				each action or transition between pages`,
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

export default WhyUseReact;
