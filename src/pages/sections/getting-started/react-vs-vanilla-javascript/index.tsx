import React from 'react';

import SingleTopic from '../../singleTopic';
import LandingHeader from '../../../landing/LandingHeader';
import { gettingStarted } from '../../../../content/getting_started';

function ReactVsVanillaJavascript() {
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic
					title={gettingStarted[3].title}
					notes={gettingStarted[3].notes}
				/>
				<SingleTopic
					title={gettingStarted[4].title}
					notes={gettingStarted[4].notes}
				/>
			</div>
		</main>
	);
}

export default ReactVsVanillaJavascript;
