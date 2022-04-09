import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const SectionLink: React.FC<{ path: string }> = ({ path }) => {
	let formatted = path.toLowerCase().split(' ').join('-');

	return (
		<li>
			<Link to={`/${formatted}`} className="nav-link">
				{path}
			</Link>
		</li>
	);
};

export default SectionLink;
