import React from 'react';
import { NavLink } from 'react-router-dom';

const SectionLink: React.FC<{ section: string; path: string }> = ({
	section,
	path,
}) => {
	let formatted = path.toLowerCase().split(' ').join('-');

	return (
		<li>
			<NavLink to={`${section}/${formatted}`} className="nav-link">
				{path}
			</NavLink>
		</li>
	);
};

export default SectionLink;
