import React from 'react';
import SingleTopic from '../singleTopic/index';
import LandingHeader from '../../landing/LandingHeader';

const GettingStarted: React.FC<{ topics: Array<any> }> = ({
	topics = ['loading'],
}) => {
	let content = topics.map((topic, i) => (
		<SingleTopic key={i} title={topic.title} notes={topic.notes} />
	));
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">{content}</div>
		</main>
	);
};

export default GettingStarted;
