import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DefaultMain from './layout/index';
import Landing from './pages/landing';
import WhatIsReact from './pages/sections/getting-started/what-is-react';
import WhyUseReact from './pages/sections/getting-started/why-use-react';
import JavascriptToTheRescue from './pages/sections/getting-started/javascript-to-the-rescue';
import ReactVsVanillaJavascript from './pages/sections/getting-started/react-vs-vanilla-javascript';
import BuildingSinglePageApplications from './pages/sections/getting-started/building-single-page-applications-(spa)';
import AlternativeFrameworks from './pages/sections/getting-started/alternative-frameworks';

import LetAndConst from './pages/sections/javascript-refresher/let-and-const';
import ArrowFunctions from './pages/sections/javascript-refresher/arrow-functions';
import ExportsAndImports from './pages/sections/javascript-refresher/exports-and-imports';
import UnderstandingClasses from './pages/sections/javascript-refresher/understanding-classes';
import SpreadAndRestOperator from './pages/sections/javascript-refresher/spread-and-rest-operator';
import Destructuring from './pages/sections/javascript-refresher/destructuring';
import ReferenceAndPrimitiveTypes from './pages/sections/javascript-refresher/reference-and-primitive-types';
import ArrayFunctions from './pages/sections/javascript-refresher/array-functions';

import './style/main.scss';

function App() {
	return (
		<DefaultMain>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/what-is-react" element={<WhatIsReact />} />
				<Route path="/why-do-we-use-react" element={<WhyUseReact />} />
				<Route
					path="/javascript-to-the-rescue"
					element={<JavascriptToTheRescue />}
				/>
				<Route
					path="/react-vs-vanilla-javascript"
					element={<ReactVsVanillaJavascript />}
				/>
				<Route
					path="/building-single-page-applications-(spa)"
					element={<BuildingSinglePageApplications />}
				/>
				<Route
					path="/alternative-frameworks"
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
