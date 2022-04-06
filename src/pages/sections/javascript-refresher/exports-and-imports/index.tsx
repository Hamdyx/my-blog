import React from 'react';
import LandingHeader from '../../../landing/LandingHeader';
import SingleTopic from '../../singleTopic';

function ExportsAndImports() {
	const summary = {
		title: 'Exports And Imports',
		notes: [
			`next gen javascript offers the feature of writing modular code`,
			`with ES6 we can split the code into multiple files (modules) then we can import what is needed`,
			`the idea behind exports and imports is simply that inside javascript files we can import content from other files`,
		],
	};

	const differentSyntax = {
		title: 'Arrow Functions syntax',
		notes: [
			`/person.js: const person = { name: 'Max' } export default person`,
			`/utility.js: export const clean = () => { ... } export const baseData = 10;`,
			`/app.js: import person from './person.js'; || import prs from './person.js; both are the same as we used export defaut`,
			`default keyword means if we import something from this file it will always be the default export`,
			`/app.js: import { clean } from './utility.js'; import { baseData} from './utility.js;`,
			`/app.js: import { clean, baseData } from './utility.js';`,
			`/app.js: import { baseData as data } from './utility.js';`,
			`/app.js: import * as bundled from './utility.js'; bundled.clean || bundled.baseData`,
		],
	};

	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic title={summary.title} notes={summary.notes} />
				<SingleTopic
					title={differentSyntax.title}
					notes={differentSyntax.notes}
				/>
			</div>
		</main>
	);
}

export default ExportsAndImports;
