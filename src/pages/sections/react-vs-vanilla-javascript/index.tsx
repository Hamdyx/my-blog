import React from 'react';

import SingleTopic from '../singleTopic';
import LandingHeader from '../../landing/LandingHeader';

function ReactVsVanillaJavascript() {
	const summary = {
		title: 'React vs vanilla javascript',
		notes: [
			`javascript runs in the browser on the loading page, and made it
				possible to execute logic in the browser`,
			`you can manipulate the HTML structure (DOM) of the page with
				javascript`,
			`no (visible) requests to the server required, no need to wait for
				a new HTML page as a response`,
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

export default ReactVsVanillaJavascript;
