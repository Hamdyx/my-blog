export const reactBasicsPaths = [
	'what-are-components',
	'declarative-approach',
	'create-react-project',
	'analyzing-react-project',
	'introduction-to-jsx',
	'how-react-works',
	'building-first-custom-component',
	'writing-more-complex-jsx-code',
	'adding-basic-css',
	'outputting-dynamic-data',
	'passing-data-via-props',
	'splitting-components',
	'composition',
];
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
	[
		{
			title: 'introduction to JSX',
			notes: [
				`JSX stands for javascript XML, and it's basically html code inside javascript`,
				`JSX code gets transformed into more browser-friendly code when using npm start before anything gets served`,
				`if you want to check the transformed code, head to browser developer tools then go to sources tab, 
					you can find it in static/js folder in main.chunk.js file`,
				`JSX made it possbile to write more developer friendly code into our javascript that gets transformed afterwards to browser friendly code`,
			],
		},
	],
	[
		{
			title: 'how react works ?',
			notes: [
				`simply we create reusable components (custom html and css elements) and export these building blocks to our user interface`,
				`we define these components with the target state we want then react will generate the right instructions for rendering our desired elements`,
				`without react we would use the imperative approach, for example: to render a paragraph, we would first create the element, 
				then we set it's text content, and finally we need to select the target node and append the element as a child node`,
			],
		},
	],
	[
		{
			title: 'building first custom component',
			notes: [
				`in react we build a component tree, we have our main App component at the top,
					below that we can have any custom html elements (custom components) which also hold other user interface pieces`,
				`as a best practice rule, we place each component in a separate file because as our project grows we would end up with dozens of components`,
				`when naming component files, we follow the naming convention of react components by starting the name with capital letter 
					followed by every sub-word starting with a capital letter aswell`,
				`important note: react components are simply javascript functions that return JSX code`,
				`when creating a component, we declare a function with the same name as the component file and then we return the desired JSX code`,
				`to use this component outside it's file, we need to export it as the default of this file, then we can import it into other files`,
				`once our component is imported, we can use it as html element with openning and closing tags but starting with a capital letter`,
			],
		},
	],
	[
		{
			title: 'writing more complex jsx code',
			notes: [
				`when returning multiple elements from a react component, our retuned elements should have only one root element`,
				`as a work around we can wrap our retuned elements with a div element`,
				`react provided a way to solve this with react fragments, we can now wrap our element 
					with <React.Fragment></React.Fragment> or the short syntax: <></>`,
				`in the past we had to use: import React from 'react'; in all the files containing jsx code`,
				`in modern react versions we can omit this import, and write our jsx code normally`,
				`under the hood our jsx code is transformed to somehting like this 
					React.createElement('div', {}, React.createElement('h2', {}, 'Let's get started'), React.createElement(Expenses, {items: expenses}));`,
				`then that code gets transformed even more to browser-friendly code`,
			],
		},
	],
	[
		{
			title: 'adding basic css styling',
			notes: [
				`first we create our css file next to our component file`,
				`then we need to import that css file into our component file to tell react to scan this file for custom styles`,
				`everything else is just the same as styling normal html elements`,
				`when adding classes to react components, we use className instead of class as it's a reserved word in javascript`,
			],
		},
	],
	[
		{
			title: 'outputting dynamic data',
			notes: [
				`till now we only rendered hard coded data into our components, but that doesn't achieve the reusability we need`,
				`as we know, react components are just javascript functions, which means we can pass parameters to these functions, 
					however it's called props in react components`,
				`we can render javascript statements, expressions and variables inside our jsx code by adding {},
					inside { ... } we can execute any javascript code that we wanna render it's output result`,
			],
		},
	],
	[
		{
			title: 'passing data via props',
			notes: [
				`we can make our components reusable by using parameters and a concept called props`,
				`when we want to render different data into our custom components, we can have this data in the parent component 
					and have it passed to the child component as props (params, attributes)`,
				`we cann't have direct access to the variables defined in other components, instead we need to have them passed as props`,
				`<CustomComponent name='Max' age={24} />`,
				`to access these attributes we need to define props parameter in our child component, 
					then we can access it's properties like this: props.name || props.age`,
			],
		},
	],
	[
		{
			title: 'splitting components',
			notes: [
				`as you application grows, your components code can get messy, so we always split components into smaller building blocks
					keeping each component focused on one core task`,
				`it's always a good practice to split big components into multiple smaller components`,
				`by splitting components, you keep the code more readable and maintainable`,
				`when rendreing components, if it has no content between openning and closing tags, we can omit the closing tag
				 and type it like this <CustomComponent />`,
			],
		},
	],
	[
		{
			title: 'composition',
			notes: [
				`composition is about building components from other components which makes building complex user interface much easier`,
				`we can extract some duplication from html elements layout into custom wrappers`,
				`custom wrappers also help getting rid of some code duplication in css files`,
				`custom wrappers don't know their content ahead of time, so we use { props.children } to render content between openning and closing tags`,
				`react components don't have className attributes, instead if we defined classes like normal elements we can access it through props.className`,
			],
		},
	],
];
