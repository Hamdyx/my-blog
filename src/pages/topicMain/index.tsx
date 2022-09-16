import React from 'react';
import SingleTopic from '../sections/singleTopic/index';
import { useParams } from 'react-router-dom';
import { Topics } from '../../content';
import LandingHeader from '../landing/LandingHeader';

const TopicMain: React.FC = () => {
	console.log('TopicMain ======> rendered');
	const { topic, id } = useParams();
	console.log('TopicMain ======> params', { topic, id });
	console.log('TopicMain ======> Topics', Topics);
	const data: any = Topics[topic as any];
	console.log('TopicMain ======> data', data);
	const topics = data[id as any];
	console.log('TopicMain ======> topics', topics);

	let content = topics.map((topic: any, i: number) => (
		<SingleTopic key={i} title={topic.title} notes={topic.notes} />
	));

	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">{content}</div>
		</main>
	);
};

export default TopicMain;
