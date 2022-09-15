import React from 'react';
import SingleTopic from '../singleTopic/index';
import LandingHeader from '../../landing/LandingHeader';
import { useParams } from 'react-router-dom';
import { Topics } from '../../../content/getting_started';

const GettingStarted: React.FC<{ topics: any }> = ({
	topics = ['loading'],
}) => {
	const { id } = useParams();
	const data: any = Topics['getting-started'];
	topics = data[id as any];

	console.log('GettingStarted ======> id', id);
	console.log('GettingStarted ======> data', data);
	console.log('GettingStarted ======> topics', topics);
	let content = topics?.map((topic: any, i: number) => (
		<SingleTopic key={i} title={topic?.title} notes={topic?.notes} />
	));
	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">{content}</div>
		</main>
	);
};

export default GettingStarted;
