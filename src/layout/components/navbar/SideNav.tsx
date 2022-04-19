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
		'reference and primitive types',
		'array functions',
	];

	const menu_3 = [
		'what are components',
		'declarative approach',
		'create react project',
		'analyzing react project',
	];

	return (
		<Nav defaultActiveKey="/home" className="flex-column sidenav-container">
			<DropdownLinks title="getting started" links={menu_1} />
			<DropdownLinks title="javascript refresher" links={menu_2} />
			<DropdownLinks title="react basics" links={menu_3} />
		</Nav>
	);
};

export default SideNav;
