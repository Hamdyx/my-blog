export const reactBasics = [
	[
		{
			title: 'What are components ?',
			notes: [
				`React is all about components because all user interfaces in the end are made up of components`,
				`components are building blocks (same item - different data) combined together to build user interface`,
				`components can be anything such as containers, inputs, buttons, product items and course topics`,
			],
		},
		{
			title: 'Why components ?',
			notes: [
				`Reusability: don't repeat yourself`,
				`Separation of Concerns:  Don't do too many things in one and the same place (function)`,
				`split big chunks of code into multiple smaller functions`,
			],
		},
	],
	[
		{
			title: 'how is a component build ?',
			notes: [
				`React components are simply combination of HTML, CSS, Javascript`,
				`we combine HTML, CSS, Javascript to build custom components then we use these components to build user interfaces`,
			],
		},
		{
			title: 'react used declarative approach',
			notes: [
				`we don't tell react that a certain HTML element should be created 
                and inserted in a specific place in the user interface like in vanilla js`,
				`in react we define the desired target state and let react figure out the actual javascript DOM instructions and user interface updates`,
			],
		},
	],
	[
		{
			title: 'Create new react projects',
			notes: [
				`install NodeJs (stable version)`,
				`use create-react-app library for creating new react projects`,
				`1. navigate to the folder where you want to initialize the app: cd dir_name`,
				`2. run in terminal: npx create-react-app my-app`,
				`3. navigate to the project folder: cd my-app`,
				`4. start the local host server: npm start`,
				`if react project was downloaded from`,
				`if react project was downloaded or copied instead of using npx create-react-app, we need to use "$ npm install"  before we start the app`,
			],
		},
	],
	[
		{
			title: 'Analyzing standard react projects',
			notes: [
				`./src folder: the most imortant folder where we write our code that changes updates the app`,
				`in ./src folder we have 2 javascript files and 1 css file`,
				`react code is just javascript code, we will be using different features and libraries but ultimately it's just javascript code`,
				`./src/index.js : is the first code file that will be executed whenever the page is loaded (localhost:300)`,
				`some of our code won't be understood by the browser, for exmaple importing css files into javascript files`,
				`to solve this issue, our code will get translated to something the browser understands and can work with before rendering`,
				`$ npm start: the script we used to start our development server will also take our code and transform it to work without any problem in the browser`,
			],
		},
		{
			title: 'entry point',
			notes: [
				`./src/index.js file`,
				`first we import needed third party packages and libraries such as ReactDDOM`,
				`also we import custom components that we want to render (import App from './App')`,
				`then we import css file to include the styles into our project`,
				`if we are importing a js file we omit the .js extension, but we keep it for other files like (.css || .html)`,
				`we use a method called "createRoot" from ReactDOM, this methods created the main entry point of the user interface`,
				`ReactDOM.createRoot(): it tells react where this react application (user interface) should be placed in the webpage that is loaded`,
				`we call render method on that root to show our user interface`,
				`ReactDOM.createRoot().render(): tells react what should be rendered in the selected div (root)`,
			],
		},
		{
			title: 'single html file',
			notes: [
				`./public/index.html file`,
				`the only html file included in our react projects because it's called single-page-application`,
				`it's the single html file that is loaded by the browser`,
				`the entry point where the react driven user interface will be rendred`,
				`in this html file we will find a div element with id root`,
				`#root: is the element where our react code will be injected and rendered`,
			],
		},
		{
			title: 'first component file',
			notes: [
				`./src/App.js file`,
				`simply it holds a function and exports it so other files can then use it`,
				`in this file we are returning a function that returns html code from javascript file`,
				`this code is not valid javascript code, however it's working because this is a feature called jsx`,
				`JSX: it's a special syntax invented by react team, we will discover in next sections`,
			],
		},
	],
];
