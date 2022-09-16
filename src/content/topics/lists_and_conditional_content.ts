export const lists_and_conditional_content = {
	'rendering-lists-of-data': [
		{
			title: `rendering lists of data`,
			notes: [
				`without jsx we would need to write down each item we want to render into our code, doing a lot of repetitive tasks also making it hard to maintain the code`,
				`thanks to jsx we can now render array of elements (components) inside dynamic expression {}`,
				`{[1, 2, 3].map(el => <CustomComponent />)}`,
			],
		},
	],
	'using-stateful-lists': [
		{
			title: `using stateful lists`,
			notes: [
				`if our rendered list would change overtime, and we want this change to trigger a layout reevaluation, we need to define our list as a state variable`,
				`this way when we add, remove or update an item, it would update the UI aswell`,
				`when updating the list, we should pass a function to the state updating function as it depends on the previous state`,
			],
		},
	],
	'understanding-keys': [
		{
			title: `understanding keys`,
			notes: [
				`by default when rendering a list, react would add an item then checks the content of all the items to match the array`,
				`this behavior could lead to performance issues and bugs`,
				`whenever we render a list of items, we need to assign a unique key props to each item`,
				`this way react can keep track of list content also determining which item should be updated`,
			],
		},
	],
	'conditional-content': [
		{
			title: `conditional content`,
			notes: [
				`we can render content that depends on a specific condition using the dynamic expression with ternary operator {condition ? true : false}`,
				`we can also use another javascript trick with ternary operator {condition && statement} as it always returns the statement if the condition is true`,
				`another way would be defining a variable outside our jsx code with default UI, and if a condition is met, we update that variable with the desired content`,
				`yet another way would be having if condition that returns a fallback or something else when certain condition is met otherwise we return our normal jsx code`,
			],
		},
	],
	'dynamic-styles': [
		{
			title: `dynamic styles`,
			notes: [
				`every html element alongside with react components has access to style attribute`,
				`in react we can pass style props to our components but it neads to be an object (wrapped inside {})`,
				`<CustomComponent style={{ height: '100%' }} />`,
				`<CustomComponent style={{ 'background-color': 'red' }} /> || <CustomComponent style={{ backgroundColor: 'red' }} />`,
			],
		},
	],
};
