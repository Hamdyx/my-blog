import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DefaultMain from './layout/index';
import Landing from './pages/landing';
import AlternativeFrameworks from './pages/sections/getting-started/alternative-frameworks';
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
import {
	debuggingReactApps,
	debuggingReactAppsPaths,
} from './content/debugging_react_apps';
import { divingDeeper, divingDeeperPaths } from './content/diving_deeper';
import {
	reactTypescript,
	reactTypescriptPaths,
} from './content/react_typescript';
import ReactBasics from './pages/sections/react-basics';
import './style/main.scss';
import TopicMain from './pages/topicMain';

function App() {
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

	const debuggingReactAppsRoutes = debuggingReactAppsPaths.map((el, i) => {
		let content = debuggingReactApps[i];
		return (
			<Route
				key={i}
				path={`/debugging-react-apps/${el}`}
				element={<ReactBasics topics={content} />}
			/>
		);
	});

	const divingDeeperRoutes = divingDeeperPaths.map((el, i) => {
		let content = divingDeeper[i];
		return (
			<Route
				key={i}
				path={`/diving-deeper/${el}`}
				element={<ReactBasics topics={content} />}
			/>
		);
	});

	const reactTypescriptRoutes = reactTypescriptPaths.map((el, i) => {
		let content = reactTypescript[i];
		return (
			<Route
				key={i}
				path={`/react-typescript/${el}`}
				element={<ReactBasics topics={content} />}
			/>
		);
	});

	return (
		<DefaultMain>
			<Routes>
				<Route path="/" element={<Landing />} />

				<Route path="/:topic/:id" element={<TopicMain />} />
				<Route
					path="/getting_started/alternative-frameworks"
					element={<AlternativeFrameworks />}
				/>

				{reactBasicsRoutes}
				{reactStateAndEventsRoutes}
				{listsAndConditionalContentRoutes}
				{stylingComponentsRoutes}
				{debuggingReactAppsRoutes}
				{divingDeeperRoutes}
				{reactTypescriptRoutes}
			</Routes>
		</DefaultMain>
	);
}

export default App;
