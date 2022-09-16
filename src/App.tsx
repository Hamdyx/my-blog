import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultMain from './layout/index';
import Landing from './pages/landing';
import AlternativeFrameworks from './pages/sections/getting-started/alternative-frameworks';
import './style/main.scss';
import TopicMain from './pages/topicMain';

function App() {
	return (
		<DefaultMain>
			<Routes>
				<Route path="/" element={<Landing />} />

				<Route path="/:topic/:id" element={<TopicMain />} />
				<Route
					path="/getting_started/alternative-frameworks"
					element={<AlternativeFrameworks />}
				/>
			</Routes>
		</DefaultMain>
	);
}

export default App;
