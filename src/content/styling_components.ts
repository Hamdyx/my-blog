export const stylingComponentsPaths = [
	`dynamic-inline-styles`,
	`css-dynamic-classes`,
	`introducing-styled-components`,
	`css-modules`,
];

export const stylingComponents = [
	[
		{
			title: 'dynamic inline styles',
			notes: [
				`dynamic styling comes handy when we want to style components based on user input (valid or invalid)`,
				`we can achieve that by using inline styles with ternary operator`,
				`we declare a boolean state variable that indicates whether a certain input is valid`,
				`then we can adjust the styles based on the state value, <...style={{color: isValid ? 'green' : 'red'}} />`,
				`keep in mind that inline styling has the highest priority and will override any other styles`,
			],
		},
	],
	[
		{
			title: 'css dynamic classes',
			notes: [
				`another and a better way of acheiving dynamic styling would be using dynamic css classes`,
				`we can use the same technique as dynamic inline styling however by setting dynamic css classes this time`,
				'with the help of dynamic expression and string literals ( backticks ``) we can set dynamic class names',
				'<... className={`form-control ${!isValid ? "invalid" : ""}`} />',
				`this way we are not overriding default styles and it much cleaner code`,
			],
		},
	],
	[
		{
			title: 'introducing styled components',
			notes: [
				`styled components is a third party package that helps styling components by applying styles only to attached components`,
				`styled object has method for every HTML element`,
				'everything inside (``) would be attached to that Button and only affects instances made from this const',
				'we remove any selectors inside (``) and if we want to select a child or use sudo selectors we use & (& child {...})',
				'this would return a button with special className that has all these styles',
				`npm i --save styled-components`,
				`import styled from 'styled-components'`,
				'const Button = styled.button`color: black; padding: 1rem; &:focus: {color: blue;}`',
			],
		},
		{
			title: 'styled components & dynamic props',
			notes: [
				`we still can use our components as regular components, hence we can add dynamic class names`,
				'another way would be by setting props and using it inside our defined styles (``)',
				`<CustomComponent invalid={true} />`,
				'border: 1px solid ${props => (props.invalid ? "red" : "black")}',
			],
		},
	],
	[
		{
			title: 'css modules',
			notes: [
				`css modules is a feature that's only available in projects that are configured to support it as it needs a code transformation to run in browsers`,
				`projects made with create-react-app already support css modules`,
				`this feature allows us to have styles scoped to components where we use it`,
				`first we need to rename our css files to (abc.module.css)`,
				`then we can access css classes as object properties`,
				`import styles from './Button.module.css'`,
				`<button className={styles.button} > || <button className={styles['form-control']} >`,
			],
		},
	],
];
