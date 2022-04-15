import React from 'react';

import SingleTopic from '../../singleTopic';
import LandingHeader from '../../../landing/LandingHeader';
import { gettingStarted } from '../../../../content/getting_started';

function WhatIsReact() {
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic
					title={gettingStarted[0].title}
					notes={gettingStarted[0].notes}
				/>
			</div>
		</main>
	);
}

export default WhatIsReact;
