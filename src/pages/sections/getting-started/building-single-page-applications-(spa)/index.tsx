import React from 'react';
import SingleTopic from '../../singleTopic/index';
import LandingHeader from '../../../landing/LandingHeader';

function BuildingSinglePageApplications() {
	const summary = {
		title: 'building single-page-applications (SPA)',
		notes: [
			`react can be used to control parts of HTML pages or entire pages`,
			`widget approach on a multi-page-application. (some) pages are
				still rendered on and served by a backend server`,
			`react can also be used to control the entire frontend of a web
				application`,
			`single-page-application (SPA) approach. Server only sends one HTML
				page, thereafter, react takes over and controls the UI`,
			`with react we dont request second HTML page, instead we use
				javascript to change the content of the page which leads to
				smoother UI and better user experience`,
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

export default BuildingSinglePageApplications;
