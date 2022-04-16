import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DefaultMain from './layout/index';
import Landing from './pages/landing';
import AlternativeFrameworks from './pages/sections/getting-started/alternative-frameworks';

import LetAndConst from './pages/sections/javascript-refresher/let-and-const';
import ArrowFunctions from './pages/sections/javascript-refresher/arrow-functions';
import ExportsAndImports from './pages/sections/javascript-refresher/exports-and-imports';
import UnderstandingClasses from './pages/sections/javascript-refresher/understanding-classes';
import SpreadAndRestOperator from './pages/sections/javascript-refresher/spread-and-rest-operator';
import Destructuring from './pages/sections/javascript-refresher/destructuring';
import ReferenceAndPrimitiveTypes from './pages/sections/javascript-refresher/reference-and-primitive-types';
import ArrayFunctions from './pages/sections/javascript-refresher/array-functions';
import { gettingStarted } from './content/getting_started';
import GettingStarted from './pages/sections/getting-started';
import './style/main.scss';

function App() {
	const gettingStartedPaths = [
		'what-is-react',
		'why-do-we-use-react',
		'javascript-to-the-rescue',
		'react-vs-vanilla-javascript',
		'building-single-page-applications-(spa)',
	];
	const gettingStartedRoutes = gettingStartedPaths.map((el, i) => {
		let content = gettingStarted[i];
		return (
			<Route
				key={i}
				path={`/getting-started/${el}`}
				element={<GettingStarted topics={content} />}
			/>
		);
	});
	return (
		<DefaultMain>
			<Routes>
				<Route path="/" element={<Landing />} />
				{gettingStartedRoutes}
				<Route
					path="/getting-started/alternative-frameworks"
					element={<AlternativeFrameworks />}
				/>

				<Route path="/let-and-const" element={<LetAndConst />} />
				<Route path="/arrow-functions" element={<ArrowFunctions />} />
				<Route path="/exports-and-imports" element={<ExportsAndImports />} />
				<Route
					path="/understanding-classes"
					element={<UnderstandingClasses />}
				/>
				<Route
					path="/spread-and-rest-operator"
					element={<SpreadAndRestOperator />}
				/>
				<Route path="/destructuring" element={<Destructuring />} />
				<Route
					path="/reference-and-primitive-types"
					element={<ReferenceAndPrimitiveTypes />}
				/>
				<Route path="/array-functions" element={<ArrayFunctions />} />
			</Routes>
		</DefaultMain>
	);
}

export default App;
