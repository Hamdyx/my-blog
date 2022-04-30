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
		<Accordion.Item eventKey={eventKey}>
			<Accordion.Header>{title}</Accordion.Header>
			<Accordion.Body>
				<ul className="sidenav-items" onClick={handleClick}>
					{content}
				</ul>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default DropdownLinks;
