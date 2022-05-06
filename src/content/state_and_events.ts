export const StateAndEvents = [
	[
		{
			title: 'listening to events',
			notes: [
				'in all HTML elements we have access to native DOM events that we can listen to (onclick, onfocus)',
				'before we were listening to events using document.addEventListener (imperative way)',
				'with react and JSX we can add special props that start with "on" to JSX elements (onClick, onChange, ...) (declarative way)',
				'with event listeners, we automatically get a default event object with a lot of properties, most importantly we have event.target that points to the DOM element where the event occured',
				'with event.target we have access to the current value of the current DOM element with event.target.value',
				'<button onClick={() => console.log("btn clicked")}></button>',
				'<button onClick={clickHandler}></button> // we pass a pointer to the function without executing it',
				'react then will memorize the function and execute it when the event occurs',
			],
		},
	],
	[
		{
			title: 'component functions',
			notes: [
				'any components is a regular functions, the only special thing about it that it returns JSX code ',
				`we don't call these functions (components), we only use them as HTML elements and that is the only time we call it`,
				`when react evaluates the JSX code, it will call these functions and then evaluates it's return until there is no more jsx code`,
				'react then evaluates the overall result then translates that into DOM instructions for rendering elements',
				'react goes through all that only once at application inital rendering and never repeats it',
				'however in modern applications we might need to update the UI when something happens (button click, form submission, ...)',
			],
		},
	],
	[
		{
			title: 'working with state',
			notes: [
				`state is not a react specific concept but it's a code element in react`,
				`state is useful when we want to update the UI when some variable updates`,
				`whenever we have a variable that when updates should trigger a layout update we should use state`,
				`we can declare state variables with a special function called 'useState'`,
				`useState is a react hook which can be only called directly inside a component function and not in another nested function`,
				`when calling useState, it always returns 2 items: the state variable and a funciton that updates the state`,
				`we don't update the state like regular variables with assignment ( x = 1) instead using the function returned from useState`,
				`import {useState} from 'react';`,
				`const [value, setValue] = useState('default value');`,
				`setValue('new value')`,
				`updating the state triggers a UI reevaluation only for the specific component with the new state value`,
				`important note: updating the state doesn't happen immediately instead it schedule the update and happens asynchronously`,
			],
		},
	],
	[
		{
			title: 'useState hook',
			notes: [
				`state is defined per component instane, even if the same component is used multiple times`,
				`each component would have it's own state instance detached from the others`,
				`when the state variable changes it triggers UI reevaluation and the component function is executed again`,
				`however when calling useState again react will know whether it the initial rendering or a UI update`,
				`we always get a brand new state with the latest snapshot whenever the component function reevaluate`,
				`react always keeps track of when useState is being called, whether it's the first time or rerendering`,
				`using the state is very simple, useState always returns 2 items, we can use the first in our jsx code and the second to update the state`,
				`state adds reactivity to our application, without state our UI would never change`,
			],
		},
	],
	[
		{
			title: 'working with multiple state',
			notes: [
				`react lets us have as many state variables as we want in any component`,
				`by calling useState multiple times we get our state variables separated from each other`,
				`when updating one of the state variables we would update them individually using the function returned by useState`,
			],
		},
		{
			title: 'using one state instead',
			notes: [
				`we can define our state as a single object with multiple keys`,
				`const [userInput, setUserInput] = useState({title: '', amount: '', value: ''})`,
				`however when updating the state, we need to include all keys in each update statement even if some keys didn't change`,
				`if we ignored some keys the state would be updated only with the passed keys and other keys would be discarded`,
				`another way of updating the state would be using the spread operator`,
				`setUserInput({...userInput, title: 'new title'})`,
			],
		},
	],
	[
		{
			title: 'previous state',
			notes: [
				`as react schedules state updates and not doing it immediately, we might end up with a lot of scheduled updates`,
				`updating the state with the regular way we might not receive the latest snapshot of the state value`,
				`whenever updating the state that depends on the previous state, we should use another form of state updating function`,
				`we should pass a function to the state updating function`,
				`setUserInput((prevState) => { return {...prevstate, title: 'new title'}; })`,
				`this way react guarantees that we get the latest snapshot of the state no matter how many scheduled updates we have`,
			],
		},
	],
	[
		{
			title: 'two-way binding',
			notes: [
				`as we're listening to user input, we can also pass value back to the input elements`,
				`so we're not just update the state, we are also feeding back the input with the updated state value`,
				`we can achieve that by adding a value prop to the input element and assign it to the state variable`,
				`this way we added two way binding to our application, so whenever we change or reset the state variables it would change the input elements value`,
			],
		},
	],
	[
		{
			title: 'child to parent communication',
			notes: [
				`in react props help us sending data from parent to child not the other way, also we cannot skip intermediate components`,
				`however we can pass function as props, so we can declare the funciton inside the parent component and pass to to the child`,
				`inside this function we can receive the data as arguments, then we can manipulate the data in the parent component where the function is defined`,
				`we have access to the funciton inside the child component through props, so we can use and execute the function defined in the parent component by pointing at it inside the child`,
			],
		},
	],
	[
		{
			title: 'lifting state up',
			notes: [
				`we can't pass data between components that don't have direct access to each other (parent > child)`,
				`however we can use a concept called lifting the state up, we can achieve that by passing functions as props from parent to child`,
				`using this pattern, we can lift the data up one level each time until we reach the desired common component that has access to multiple child components`,
			],
		},
	],
	[
		{
			title: 'controlled vs uncontrolled components',
			notes: [
				`we will face a lot of different custom components as our app grows`,
				`components with state variables where we listen to changes and update state are called statefull || controlled components`,
				`components without state variable defined and only used to render some output are called stateless || presentational || uncontrolled components`,
			],
		},
	],
];
