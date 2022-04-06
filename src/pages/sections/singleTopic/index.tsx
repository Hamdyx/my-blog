import TopicDetails from './TopicDetails';

const SingleTopic: React.FC<{ title: string; notes: Array<string> }> = ({
	children,
	title,
	notes,
}) => {
	return (
		<dl>
			<dt>{title}</dt>
			<TopicDetails notes={notes} />
		</dl>
	);
};

export default SingleTopic;
