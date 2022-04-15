export const gettingStarted = [
	{
		title: `what is react`,
		notes: [
			'react is a javascript library for buiding modern user interfaces',
			'declarative, component-focused approach',
		],
	},
	{
		title: 'Why do we use React ?',
		notes: [
			`mobile apps and desktop apps feels very reactive: things happen
            instantly, you don't wait for new pages to load or actions to
            start`,
			`traditionally, in web apps, you click a link and wait for a new
            page to load, you click a button and wait for some action to
            complete`,
			`users send HTML requests to the server and wait for a response for
            each action or transition between pages`,
		],
	},
	{
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
	{
		title: 'vanilla javascript',
		notes: [
			`with only javascript we can get the job done but with much more code`,
			`using vanilla javascript we have to describe every single step or action`,
			`this way is called imperative approach, we simply descrbe action after action, step after step`,
			`this way can reach it's limits on more complex applications as we will be reinventing the wheel by wasting time doing repetitive tasks`,
		],
	},
	{
		title: 'react',
		notes: [
			'with react we can split our code into small building blocks , small reusable components (custom HTML components)',
			`every component should have clear task, therefore your code stays maintainable and manageable and react the library will take do the heavy lifting of rendering components on the screen and combining your code`,
			`while using react we work on a higher level which makes building complex components much easier`,
			`in react we don't have a stet by step instructions, instead we define what we want to have as end result and then we have some placeholders and flexible element that are processed by react to change what's on the screen`,
		],
	},
	{
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
];
