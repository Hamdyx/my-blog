const TopicDetails: React.FC<{ notes: Array<string> }> = ({
	children,
	notes,
}) => {
	const content = notes.map((el, i) => <dd key={i}>{el}</dd>);

	return <>{content}</>;
};

export default TopicDetails;
