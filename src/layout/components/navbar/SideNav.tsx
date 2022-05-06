import React from 'react';
import { Nav, Accordion } from 'react-bootstrap';
import DropdownLinks from './DropdownLinks';

const SideNav: React.FC = (props) => {
	const menuContent = [
		{
			title: 'getting started',
			links: [
				`what is react`,
				`why do we use react`,
				`javascript to the rescue`,
				`react vs vanilla javascript`,
				`building single-page-applications (SPA)`,
				'alternative frameworks',
			],
		},
		{
			title: 'javascript refresher',
			links: [
				`let and const`,
				`arrow functions`,
				`exports and imports`,
				'understanding classes',
				'spread and rest operator',
				'destructuring',
				'reference and primitive types',
				'array functions',
			],
		},
		{
			title: 'react basics',
			links: [
				'what are components',
				'declarative approach',
				'create react project',
				'analyzing react project',
				'introduction to jsx',
				'how react works',
				'building first custom component',
				'writing more complex jsx code',
				'adding basic css',
				'outputting dynamic data',
				'passing data via props',
				'splitting components',
				'composition',
			],
		},
		{
			title: 'react state and events',
			links: [
				'listening to events',
				'component functions',
				'working with state',
				'useState hook',
				'working with multiple state',
				'previous state',
				'two-way binding',
				'child to parent communication',
				'lifting state up',
				'controlled vs uncontrolled components',
			],
		},
		{
			title: 'lists and conditional content',
			links: [
				'rendering lists of data',
				'using stateful lists',
				'understanding keys',
				'conditional content',
				'dynamic styles',
			],
		},
	];

	const menuLinks = menuContent.map((el, i) => (
		<DropdownLinks
			key={i}
			eventKey={String(i)}
			title={el.title}
			links={el.links}
		/>
	));

	return (
		<Nav defaultActiveKey="/home" className="flex-column sidenav-container">
			<div className="nav-section">
				<Accordion>{menuLinks}</Accordion>
			</div>
		</Nav>
	);
};

export default SideNav;
