import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DefaultMain from './layout/index';
import Landing from './pages/landing';
import AlternativeFrameworks from './pages/sections/getting-started/alternative-frameworks';

import { gettingStarted, gettingStartedPaths } from './content/getting_started';
import {
	javascriptRefresher,
	javascriptRefresherPaths,
} from './content/javascript_refresher';
import { reactBasics, reactBasicsPaths } from './content/react_basics';
import {
	StateAndEvents,
	reactStateAndEventsPaths,
} from './content/state_and_events';
import {
	listsAndConditionalContent,
	listsAndConditionalContentPaths,
} from './content/lists_and_conditional_content';
import {
	stylingComponents,
	stylingComponentsPaths,
} from './content/styling_components';
import GettingStarted from './pages/sections/getting-started';
import JavascriptRefresher from './pages/sections/javascript-refresher';
import ReactBasics from './pages/sections/react-basics';
import './style/main.scss';

function App() {
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

	const listsAndConditionalContentRoutes = listsAndConditionalContentPaths.map(
		(el, i) => {
			let content = listsAndConditionalContent[i];
			return (
				<Route
					key={i}
					path={`/lists-and-conditional-content/${el}`}
					element={<ReactBasics topics={content} />}
				/>
			);
		}
	);

	const stylingComponentsRoutes = stylingComponentsPaths.map((el, i) => {
		let content = stylingComponents[i];
		return (
			<Route
				key={i}
				path={`/styling-components/${el}`}
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
				{listsAndConditionalContentRoutes}
				{stylingComponentsRoutes}
			</Routes>
		</DefaultMain>
	);
}

export default App;
