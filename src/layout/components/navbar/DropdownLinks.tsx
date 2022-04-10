import React from 'react';
import { Accordion } from 'react-bootstrap';
import SectionLink from './SectionLink';

const DropdownLinks: React.FC<{ title: string; links: Array<string> }> = ({
	title,
	links,
}) => {
	const content = links.map((link, i) => <SectionLink key={i} path={link} />);

	let activeSection;
	let prevActive = [];
	const handleClick = (e: any) => {
		let target = e.taret;
		activeSection = target;
		let linksArr = [...e.currentTarget.children];
		linksArr = linksArr.map((el) => el.children[0]);
		prevActive = linksArr.filter((el) => [...el.classList].includes('active'));
		if (prevActive.length > 0) prevActive[0].classList.remove('active');
		e.target.classList.add('active');
	};

	return (
		<div className="nav-section">
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>{title}</Accordion.Header>
					<Accordion.Body>
						<ul className="sidenav-items" onClick={handleClick}>
							{content}
						</ul>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default DropdownLinks;
