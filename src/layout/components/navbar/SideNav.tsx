import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import DropdownLinks from './DropdownLinks';

const SideNav: React.FC = (props) => {
	const menu_1 = [
		`what is react`,
		`why do we use react`,
		`javascript to the rescue`,
		`react vs vanilla javascript`,
		`building single-page-applications (SPA)`,
		'alternative frameworks',
	];

	const menu_2 = [
		`let and const`,
		`arrow functions`,
		`exports and imports`,
		'understanding classes',
		'spread and rest operator',
		'destructuring',
	];
	return (
		<Nav defaultActiveKey="/home" className="flex-column sidenav-container">
			<DropdownLinks title="Getting Started" links={menu_1} />
			<DropdownLinks title="javascript refresher" links={menu_2} />
		</Nav>
	);
};

export default SideNav;
