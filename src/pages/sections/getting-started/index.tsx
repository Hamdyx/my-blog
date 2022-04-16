import React from 'react';
import SingleTopic from '../singleTopic/index';
import LandingHeader from '../../landing/LandingHeader';
import { gettingStarted } from '../../../content/getting_started';

/* 
const DropdownLinks: React.FC<{ title: string; links: Array<string> }> = ({
	title,
	links,
}) => {
*/
const GettingStarted: React.FC<{ topics: Array<any> }> = ({
	topics = ['loading'],
}) => {
	let content = topics.map((topic, i) => (
		<SingleTopic key={i} title={topic.title} notes={topic.notes} />
	));
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				{/* <SingleTopic title={title} notes={notes} /> */}
				{content}
			</div>
		</main>
	);
};

export default GettingStarted;
