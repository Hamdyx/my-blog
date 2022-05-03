import React from 'react';
import { Accordion } from 'react-bootstrap';
import SectionLink from './SectionLink';

const DropdownLinks: React.FC<{
	eventKey: string;
	title: string;
	links: Array<string>;
}> = ({ eventKey, title, links }) => {
	const section = title.split(' ').join('-');
	const content = links.map((link, i) => (
		<SectionLink key={i} section={section} path={link} />
	));

	return (
		<Accordion.Item eventKey={eventKey}>
			<Accordion.Header>{title}</Accordion.Header>
			<Accordion.Body>
				<ul className="sidenav-items">{content}</ul>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default DropdownLinks;
