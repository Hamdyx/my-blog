import React from 'react';
import LandingHeader from '../../../landing/LandingHeader';

import Frameworks from './components/Frameworks';

function AlternativeFrameworks() {
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<Frameworks />
			</div>
		</main>
	);
}

export default AlternativeFrameworks;
