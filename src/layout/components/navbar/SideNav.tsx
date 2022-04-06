import React from 'react';
import DropdownLinks from './DropdownLinks';

const SideNav: React.FC = (props) => {
	const menu_1 = [
		`what is react`,
		`why do we use react`,
		`javascript to the rescue`,
		`react vs vanilla javascript`,
		`building single-page-applications (SPA)`,
		'alternative-frameworks',
	];

	const menu_2 = [`soon`];
	return (
		<nav className="side-nav">
			<DropdownLinks title="Getting Started" links={menu_1} />
			<DropdownLinks title="javascript refresher" links={menu_2} />
		</nav>
	);
};

export default SideNav;
