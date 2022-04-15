import React from 'react';
import SingleTopic from '../../singleTopic/index';
import LandingHeader from '../../../landing/LandingHeader';
import { gettingStarted } from '../../../../content/getting_started';

function BuildingSinglePageApplications() {
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic
					title={gettingStarted[5].title}
					notes={gettingStarted[5].notes}
				/>
			</div>
		</main>
	);
}

export default BuildingSinglePageApplications;
