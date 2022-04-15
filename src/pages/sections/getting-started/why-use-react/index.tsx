import React from 'react';
import SingleTopic from '../../singleTopic/index';
import LandingHeader from '../../../landing/LandingHeader';
import { gettingStarted } from '../../../../content/getting_started';

function WhyUseReact() {
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic
					title={gettingStarted[1].title}
					notes={gettingStarted[1].notes}
				/>
			</div>
		</main>
	);
}

export default WhyUseReact;
