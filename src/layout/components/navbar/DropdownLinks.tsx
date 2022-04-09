import React from 'react';
import { Accordion } from 'react-bootstrap';
import SectionLink from './SectionLink';

const DropdownLinks: React.FC<{ title: string; links: Array<string> }> = ({
	title,
	links,
}) => {
	const content = links.map((link, i) => <SectionLink key={i} path={link} />);

	return (
		<div className="nav-section">
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>{title}</Accordion.Header>
					<Accordion.Body>
						<ul className="sidenav-items">{content}</ul>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default DropdownLinks;
