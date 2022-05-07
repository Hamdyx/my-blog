export const debuggingReactAppsPaths = [
	'react-error-messages',
	'code-flow-and-warrings',
	'working-with-breakpoints',
	'react-devtools',
];
export const debuggingReactApps = [
	[
		{
			title: 'react error messages',
			notes: [
				`always try searching and solving errors on your own before asking others, that would help you become a better developer`,
				`when developing react apps you would encounter different error types, some crash the application and some just lead to unexpected behaviour`,
				`one of the errors that would crash the app, if we tried to return multiple adjacent jsx elements`,
				`react would need only one single root for each component, one way of solving it is to wrap our elements in a single div`,
				`another error might be undefined names, that would also crash the app, it happens if we tried to access variables before declaring it or misspelled variable name`,
			],
		},
	],
	[
		{
			title: 'code flow and warrings',
			notes: [
				`sometimes we encounter errors that would still compile successfully and won't show error messages but leads to unexpected results`,
				`this type of errors called logical errors, we would need to track the code flow and walk down the steps of defining and rendering that certain element`,
				`this error is not trigged by invalid syntax but rather incorrect structure or order of steps or maybe unexpected received value`,
				`another cause of this type of errors would be giving multiple elements the same id or the same key prop, it won't crash the app but would lead to unexpected behavior`,
			],
		},
	],
	[
		{
			title: 'working with breakpoints',
			notes: [
				`inside the browser, we can find our code in the developer tools inside sources tab`,
				`we can set breakpoints where we want to stop our code from executing and start debugging it step by step`,
				`this way we can track exactly what is happening when a certain action occurs by following each step in our code`,
			],
		},
	],
	[
		{
			title: 'react devtools',
			notes: [
				`react provides us with a browser extension specific for debugging react apps and that is react developer tools`,
				`we can use this extension with google chrome, it will help us better understand the way our application works and find react related errors`,
				`once installed we would have two associated tabs (profiler, components)`,
				`inside components tab we can see the whole components tree and not the whole DOM tags and elements`,
				`when selecting a specific component, we would see all the details about it such as props, state, hooks and which components trigger the rendering`,
			],
		},
	],
];
