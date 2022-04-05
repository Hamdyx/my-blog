import React from 'react';

const CourseSection: React.FC<{ title: string }> = ({ children, title }) => {
	return (
		<section>
			<h4>{title}</h4>
			<p>some course summary and notes</p>
			<dl>
				<TopicsGroup />
			</dl>
		</section>
	);
};

function TopicsGroup() {
	const summary = {
		note1: {
			title: 'What is React ?',
			notes: [
				'react is a javascript library for buiding modern user interfaces',
				'declarative, component-focused approach',
			],
		},
		note2: {
			title: 'Why do we use React ?',
			notes: [
				`mobile apps and desktop apps feels very reactive: things happen
				instantly, you don't wait for new pages to load or actions to
				start`,
				`traditionally, in web apps, you click a link and wait for a new
				page to load, you click a button and wait for some action to
				complete`,
				`users send HTML requests to the server and wait for a response for
				each action or transaction between pages`,
			],
		},
		note3: {
			title: 'Javascript to the resuce',
			notes: [
				`javascript runs in the browser on the loading page, and made it
				possible to execute logic in the browser`,
				`you can manipulate the HTML structure (DOM) of the page with
				javascript`,
				`no (visible) requests to the server required, no need to wait for
				a new HTML page as a response`,
			],
		},
		note4: {
			title: 'React vs vanilla javascript',
			notes: [
				`javascript runs in the browser on the loading page, and made it
				possible to execute logic in the browser`,
				`you can manipulate the HTML structure (DOM) of the page with
				javascript`,
				`no (visible) requests to the server required, no need to wait for
				a new HTML page as a response`,
			],
		},
		note5: {
			title: 'building single-page-applications (SPA)',
			notes: [
				`react can be used to control parts of HTML pages or entire pages`,
				`widget approach on a multi-page-application. (some) pages are
				still rendered on and served by a backend server`,
				`react can also be used to control the entire frontend of a web
				application`,
				`single-page-application (SPA) approach. Server only sends one HTML
				page, thereafter, react takes over and controls the UI`,
				`with react we dont request second HTML page, instead we use
				javascript to change the content of the page which leads to
				smoother UI and better user experience`,
			],
		},
	};
	return (
		<ul className="section-notes">
			<CourseTopic title={summary.note1.title} notes={summary.note1.notes} />
			<CourseTopic title={summary.note2.title} notes={summary.note2.notes} />
			<CourseTopic title={summary.note3.title} notes={summary.note3.notes} />
			<CourseTopic title={summary.note4.title} notes={summary.note4.notes} />
			<CourseTopic title={summary.note5.title} notes={summary.note5.notes} />
		</ul>
	);
}

const CourseTopic: React.FC<{ title: string; notes: Array<string> }> = ({
	children,
	title,
	notes,
}) => {
	return (
		<li>
			<dt>{title}</dt>
			<TopicDetails notes={notes} />
		</li>
	);
};

const TopicDetails: React.FC<{ notes: Array<string> }> = ({
	children,
	notes,
}) => {
	const content = notes.map((el, i) => <dd key={i}>{el}</dd>);

	return <>{content}</>;
};

export default CourseSection;
