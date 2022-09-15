import React from 'react';
import SingleTopic from '../singleTopic/index';
import LandingHeader from '../../landing/LandingHeader';
import { useParams } from 'react-router-dom';
import { Topics } from '../../../content/javascript_refresher';

const JavascriptRefresher: React.FC<{ topics: Array<any> }> = ({
	topics = ['loading'],
}) => {
	console.log('JavascriptRefresher ======> rendered');
	const { topic, id } = useParams();
	console.log('GettingStarted ======> params', { topic, id });
	console.log('GettingStarted ======> Topics', Topics);
	const data: any = Topics[topic as any];
	console.log('GettingStarted ======> data', data);
	topics = data[id as any];
	console.log('GettingStarted ======> topics', topics);

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

export default JavascriptRefresher;
