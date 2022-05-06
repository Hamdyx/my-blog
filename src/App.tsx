import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DefaultMain from './layout/index';
import Landing from './pages/landing';
import AlternativeFrameworks from './pages/sections/getting-started/alternative-frameworks';

import { gettingStarted } from './content/getting_started';
import { javascriptRefresher } from './content/javascript_refresher';
import { reactBasics } from './content/react_basics';
import { StateAndEvents } from './content/state_and_events';
import GettingStarted from './pages/sections/getting-started';
import JavascriptRefresher from './pages/sections/javascript-refresher';
import ReactBasics from './pages/sections/react-basics';
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

	const reactBasicsPaths = [
		'what-are-components',
		'declarative-approach',
		'create-react-project',
		'analyzing-react-project',
		'introduction-to-jsx',
		'how-react-works',
		'building-first-custom-component',
		'writing-more-complex-jsx-code',
		'adding-basic-css',
		'outputting-dynamic-data',
		'passing-data-via-props',
		'splitting-components',
		'composition',
	];

	const reactBasicsRoutes = reactBasicsPaths.map((el, i) => {
		let content = reactBasics[i];
		return (
			<Route
				key={i}
				path={`/react-basics/${el}`}
				element={<ReactBasics topics={content} />}
			/>
		);
	});

	const reactStateAndEventsPaths = [
		'listening-to-events',
		'component-functions',
		'working-with-state',
		'useState-hook',
		'working-with-multiple-state',
		'previous-state',
		'two-way-binding',
		'child-to-parent-communication',
		'lifting-state-up',
		'controlled-vs-uncontrolled-components',
	];

	const reactStateAndEventsRoutes = reactStateAndEventsPaths.map((el, i) => {
		let content = StateAndEvents[i];
		return (
			<Route
				key={i}
				path={`/react-state-and-events/${el}`}
				element={<ReactBasics topics={content} />}
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
				{reactBasicsRoutes}
				{reactStateAndEventsRoutes}
			</Routes>
		</DefaultMain>
	);
}

export default App;
