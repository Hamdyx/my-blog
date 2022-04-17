import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DefaultMain from './layout/index';
import Landing from './pages/landing';
import AlternativeFrameworks from './pages/sections/getting-started/alternative-frameworks';

import { gettingStarted } from './content/getting_started';
import { javascriptRefresher } from './content/javascript_refresher';
import GettingStarted from './pages/sections/getting-started';
import JavascriptRefresher from './pages/sections/javascript-refresher';
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

	const javascriptRefresherPaths = [
		'let-and-const',
		'arrow-functions',
		'exports-and-imports',
		'understanding-classes',
		'spread-and-rest-operator',
		'destructuring',
		'reference-and-primitive-types',
		'array-functions',
	];
	const javascriptRefresherRoutes = javascriptRefresherPaths.map((el, i) => {
		let content = javascriptRefresher[i];
		return (
			<Route
				key={i}
				path={`/javascript-refresher/${el}`}
				element={<JavascriptRefresher topics={content} />}
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

				{javascriptRefresherRoutes}
			</Routes>
		</DefaultMain>
	);
}

export default App;
