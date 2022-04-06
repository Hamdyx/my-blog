import React from 'react';
import SectionLink from './SectionLink';

const DropdownLinks: React.FC<{ title: string; links: Array<string> }> = ({
	title,
	links,
}) => {
	const content = links.map((link, i) => <SectionLink key={i} path={link} />);

	const toggleMenu = (e: any) => {
		const menuToggle = e.currentTarget;
		menuToggle.classList.toggle('active');
		const section = menuToggle.parentNode;
		const menu = section.children[1];
		menu.classList.toggle('show');
	};

	return (
		<div className="nav-section">
			<button onClick={toggleMenu}>{title}</button>
			<ul>{content}</ul>
		</div>
	);
};

export default DropdownLinks;
