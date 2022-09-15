export const javascriptRefresherPaths = [
	'let-and-const',
	'arrow-functions',
	'exports-and-imports',
	'understanding-classes',
	'spread-and-rest-operator',
	'destructuring',
	'reference-and-primitive-types',
	'array-functions',
];

export const Topics: any = {
	'javascript-refresher': {
		'let-and-const': [
			{
				title: 'Let and Const',
				notes: [
					`let and const are different ways for creating variables`,
					`let is the so called new var`,
					`let is for creating variables that are going to be reassigned or change values afterwards`,
					`use const for creating constants which going to be assigned once and never change`,
				],
			},
		],
		'arrow-functions': [
			{
				title: 'Arrow Functions',
				notes: [
					`new syntax for javascript functions`,
					`old: function myFunc() {...}`,
					`ES6: const myFunc = () => {...}`,
					`arrow functions solve a lot of issues with the (this) keyword`,
					`when using (this) inside arrow function it will always keep it's context and not change it during runtime`,
				],
			},
			{
				title: 'Arrow Functions syntax',
				notes: [
					`const myFunc = () => { console.log('arrow function') }`,
					`const myFunc = x => { console.log(x) }`,
					`const myFunc = (x, y) => { console.log(x, y) }`,
					`const myFunc = (x, y) => { let sum = x + y; return sum }`,
					`only return: const myFunc = (x, y) =>  x + y`,
				],
			},
		],
		'exports-and-imports': [
			{
				title: 'Exports And Imports',
				notes: [
					`next gen javascript offers the feature of writing modular code`,
					`with ES6 we can split the code into multiple files (modules) then we can import what is needed`,
					`the idea behind exports and imports is simply that inside javascript files we can import content from other files`,
				],
			},
			{
				title: 'Exports And Imports syntax',
				notes: [
					`/person.js: const person = { name: 'Max' } export default person`,
					`/utility.js: export const clean = () => { ... } export const baseData = 10;`,
					`/app.js: import person from './person.js'; || import prs from './person.js; both are the same as we used export defaut`,
					`default keyword means if we import something from this file it will always be the default export`,
					`/app.js: import { clean } from './utility.js'; import { baseData} from './utility.js;`,
					`/app.js: import { clean, baseData } from './utility.js';`,
					`/app.js: import { baseData as data } from './utility.js';`,
					`/app.js: import * as bundled from './utility.js'; bundled.clean || bundled.baseData`,
				],
			},
		],
		'understanding-classes': [
			{
				title: 'Understanding Classes',
				notes: [
					`classes are essentially blueprints for objects`,
					`classes can have properties and methods`,
					`property is variable attached to class`,
					`method is simply function attached to class`,
					`classes can inherit properties and methods from other classes`,
					`if you are extending another class (inheritance) and using the constructor, you need to add super() in the constructor`,
					`super simply executes the parent class constructor which is needed to correctly initialize the parent class`,
					`classes are used in react as one way of creating components`,
				],
			},
			{
				title: 'Classes syntax',
				notes: [
					`class Person { name = 'Max', call = () => {...} }`,
					`const myPerson = new Person();`,
					`myPerson.call();`,
					`console.log(myPerson.name);`,
					`class Person extends Master`,
					`ES6 property: constructor() { this.myProperty = 'value' }`,
					`ES7 property: myProperty = 'value'`,
					`ES6 method: myMethod() { ... }`,
					`ES7 method: myMethod = () => { ... }`,
				],
			},
		],
		'spread-and-rest-operator': [
			{
				title: 'Spread and Rest operator',
				notes: [
					`Spread: used to split up array element or object properties`,
					`const newArray = [...oldArray, 1, 2];`,
					`const newObject = {...oldObject, newProp: 5}`,
					`Rest: used to merge list of function arguments into an array`,
					`function sortArgs(...args) { return args.sort() }`,
					`const filterParams = (...params) => { return params.filter() }`,
				],
			},
		],
		destructuring: [
			{
				title: 'Destructuring',
				notes: [
					`destructuring: easily extract array element or object properties and store them in variables`,
					`array destructuring: [a, b] = [1, 2, 3]`,
					`console.log(a, b) // 1, 2`,
					`[a,  ,b] = [1, 2, 3]`,
					`console.log(a, b) // 1, 3`,
					`object destructuring: { name } = { name: 'React', age: 28}`,
					`console.log(name) // React`,
					`consoe.log(age) // undefined`,
				],
			},
		],
		'reference-and-primitive-types': [
			{
				title: 'Primitive types',
				notes: [
					`primitives: whenever you reassign or store a value in another variables it copies the value`,
					`primitive types: numbers, strings, booleans`,
					`const number = 1;`,
					`const num2 = number;`,
					`console.log(num2); // 1`,
				],
			},
			{
				title: 'Reference types',
				notes: [
					`reference: whenever you reassign or store a value in another variables it copies the pointer not the actual value`,
					`primitive types: arrays and objects`,
					`const person = { name: 'max' };`,
					`const anotherPerson = person;`,
					`person.name = 'john'`,
					`console.log(anotherPerson.name); // john`,
					`const animal = { name: 'cat' };`,
					`const anotherAnimal = { ...animal };`,
					`animal.name = 'dog'`,
					`console.log(anotherAnimal.name); // cat`,
				],
			},
		],
		'array-functions': [
			{
				title: 'Array functions',
				notes: [
					`array functions: built in methods that can run different operations on array elements`,
					`const numbers = [1, 2, 3];`,
					`const doubledNumArr = numbers.map(n => n * 2);`,
					`console.log(numbers); // [1, 2, 3]`,
					`console.log(doubleNumArr); // [2, 4, 6]`,
				],
			},
		],
	},
};
export const javascriptRefresher = [
	[
		{
			title: 'Let and Const',
			notes: [
				`let and const are different ways for creating variables`,
				`let is the so called new var`,
				`let is for creating variables that are going to be reassigned or change values afterwards`,
				`use const for creating constants which going to be assigned once and never change`,
			],
		},
	],
	[
		{
			title: 'Arrow Functions',
			notes: [
				`new syntax for javascript functions`,
				`old: function myFunc() {...}`,
				`ES6: const myFunc = () => {...}`,
				`arrow functions solve a lot of issues with the (this) keyword`,
				`when using (this) inside arrow function it will always keep it's context and not change it during runtime`,
			],
		},
		{
			title: 'Arrow Functions syntax',
			notes: [
				`const myFunc = () => { console.log('arrow function') }`,
				`const myFunc = x => { console.log(x) }`,
				`const myFunc = (x, y) => { console.log(x, y) }`,
				`const myFunc = (x, y) => { let sum = x + y; return sum }`,
				`only return: const myFunc = (x, y) =>  x + y`,
			],
		},
	],
	[
		{
			title: 'Exports And Imports',
			notes: [
				`next gen javascript offers the feature of writing modular code`,
				`with ES6 we can split the code into multiple files (modules) then we can import what is needed`,
				`the idea behind exports and imports is simply that inside javascript files we can import content from other files`,
			],
		},
		{
			title: 'Exports And Imports syntax',
			notes: [
				`/person.js: const person = { name: 'Max' } export default person`,
				`/utility.js: export const clean = () => { ... } export const baseData = 10;`,
				`/app.js: import person from './person.js'; || import prs from './person.js; both are the same as we used export defaut`,
				`default keyword means if we import something from this file it will always be the default export`,
				`/app.js: import { clean } from './utility.js'; import { baseData} from './utility.js;`,
				`/app.js: import { clean, baseData } from './utility.js';`,
				`/app.js: import { baseData as data } from './utility.js';`,
				`/app.js: import * as bundled from './utility.js'; bundled.clean || bundled.baseData`,
			],
		},
	],
	[
		{
			title: 'Understanding Classes',
			notes: [
				`classes are essentially blueprints for objects`,
				`classes can have properties and methods`,
				`property is variable attached to class`,
				`method is simply function attached to class`,
				`classes can inherit properties and methods from other classes`,
				`if you are extending another class (inheritance) and using the constructor, you need to add super() in the constructor`,
				`super simply executes the parent class constructor which is needed to correctly initialize the parent class`,
				`classes are used in react as one way of creating components`,
			],
		},
		{
			title: 'Classes syntax',
			notes: [
				`class Person { name = 'Max', call = () => {...} }`,
				`const myPerson = new Person();`,
				`myPerson.call();`,
				`console.log(myPerson.name);`,
				`class Person extends Master`,
				`ES6 property: constructor() { this.myProperty = 'value' }`,
				`ES7 property: myProperty = 'value'`,
				`ES6 method: myMethod() { ... }`,
				`ES7 method: myMethod = () => { ... }`,
			],
		},
	],
	[
		{
			title: 'Spread and Rest operator',
			notes: [
				`Spread: used to split up array element or object properties`,
				`const newArray = [...oldArray, 1, 2];`,
				`const newObject = {...oldObject, newProp: 5}`,
				`Rest: used to merge list of function arguments into an array`,
				`function sortArgs(...args) { return args.sort() }`,
				`const filterParams = (...params) => { return params.filter() }`,
			],
		},
	],
	[
		{
			title: 'Destructuring',
			notes: [
				`destructuring: easily extract array element or object properties and store them in variables`,
				`array destructuring: [a, b] = [1, 2, 3]`,
				`console.log(a, b) // 1, 2`,
				`[a,  ,b] = [1, 2, 3]`,
				`console.log(a, b) // 1, 3`,
				`object destructuring: { name } = { name: 'React', age: 28}`,
				`console.log(name) // React`,
				`consoe.log(age) // undefined`,
			],
		},
	],
	[
		{
			title: 'Primitive types',
			notes: [
				`primitives: whenever you reassign or store a value in another variables it copies the value`,
				`primitive types: numbers, strings, booleans`,
				`const number = 1;`,
				`const num2 = number;`,
				`console.log(num2); // 1`,
			],
		},
		{
			title: 'Reference types',
			notes: [
				`reference: whenever you reassign or store a value in another variables it copies the pointer not the actual value`,
				`primitive types: arrays and objects`,
				`const person = { name: 'max' };`,
				`const anotherPerson = person;`,
				`person.name = 'john'`,
				`console.log(anotherPerson.name); // john`,
				`const animal = { name: 'cat' };`,
				`const anotherAnimal = { ...animal };`,
				`animal.name = 'dog'`,
				`console.log(anotherAnimal.name); // cat`,
			],
		},
	],
	[
		{
			title: 'Array functions',
			notes: [
				`array functions: built in methods that can run different operations on array elements`,
				`const numbers = [1, 2, 3];`,
				`const doubledNumArr = numbers.map(n => n * 2);`,
				`console.log(numbers); // [1, 2, 3]`,
				`console.log(doubleNumArr); // [2, 4, 6]`,
			],
		},
	],
];
