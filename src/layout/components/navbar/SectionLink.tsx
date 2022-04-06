import React from 'react';
import { Link } from 'react-router-dom';

const SectionLink: React.FC<{ path: string }> = ({ path }) => {
	let formatted = path.toLowerCase().split(' ').join('-');

	return (
		<li>
			<Link to={`/${formatted}`}>{path}</Link>
		</li>
	);
};

export default SectionLink;
