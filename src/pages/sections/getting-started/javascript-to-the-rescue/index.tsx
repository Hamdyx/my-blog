import React from 'react';

import SingleTopic from '../../singleTopic';
import LandingHeader from '../../../landing/LandingHeader';
import { gettingStarted } from '../../../../content/getting_started';

function JavascriptToTheRescue() {
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic
					title={gettingStarted[2].title}
					notes={gettingStarted[2].notes}
				/>
			</div>
		</main>
	);
}

export default JavascriptToTheRescue;
