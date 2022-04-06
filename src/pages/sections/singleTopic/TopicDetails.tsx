const TopicDetails: React.FC<{ notes: Array<string> }> = ({
	children,
	notes,
}) => {
	const content = notes.map((el, i) => (
		<li key={i}>
			<dd>{el}</dd>
		</li>
	));

	return <ul>{content}</ul>;
};

export default TopicDetails;
