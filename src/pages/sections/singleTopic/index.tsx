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

const TopicDetails: React.FC<{ notes: Array<string> }> = ({
	children,
	notes,
}) => {
	const content = notes.map((el, i) => <dd key={i}>{el}</dd>);

	return <>{content}</>;
};

export default SingleTopic;
