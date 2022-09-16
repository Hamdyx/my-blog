export const react_typescript = {
	'what-and-why': [
		{
			title: 'what and why',
			notes: [
				`typescript is a superset to javascript, it extends javascript, the core programming language is still javascript`,
				`typescript adds static typing to javascript`,
				`javascript has data types but as we know its dynamiclly set`,
				`on the other hand typescript has static types, we need to define each variable data type before using`,
				`because of typescript we can catch errors before running our app, for example if we defined types for parameters`,
				`function add(a: number, b: number) {...}`,
				`using typescript would trigger errors if we tried calling this function with strings: add('1', '2')`,
				`this won't trigger errors with javascript but would lead to unexpected results`,
			],
		},
	],
	'installing-and-using': [
		{
			title: 'installing and using typescript',
			notes: [
				`to use typescript we need to install it with npm first, also we need node.js installed`,
				`npm init to get out package.json`,
				`npm install typescript`,
				`just remember that typescript doesn't work in browsers like javascript, it needs to be compiled to javascript first`,
				`during compile time all our type annotations will be removed because javascript doesn't know these annotations`,
				`npx tsc => this would need a config file`,
				`npx tsc file_name.ts => would work just fine`,
				`by writing our code in typescript then compiling it to javascript to run in browsers, we secure our code from errors that migh occur during runtime `,
			],
		},
	],
	'base-types': [
		{
			title: 'base types',
			notes: [
				`in typescript we have same data types as javascript (primitives, complex, function types ...)`,
				`for example when defining a variable we also declare its type`,
				`let age: number = 12; // note that Number would point to javascript Number object and not the data type`,
				`let name: string; // also String is not the data type but the String object`,
				`let isValid: boolean = true;`,
			],
		},
	],
	'complex-types': [
		{
			title: 'complex types',
			notes: [
				`typescript by default will let us declare variables without types as it adds any as type by default which we can also declare like this let x: any;`,
				`using "any" should be only as a fallback, cause it defeats the main purpose of typescript`,
				`we add types to arrays by adding [ ] next to the type => string[ ] || number[ ]`,
				`let hobbies:string[ ]; hobbies = ['sports', 'cooking']`,
				`let ages:number[ ] = [1, 2, 3]`,
				`we can also add types to declare objects like this => let obj:{ }; || let person: {name:string; age:number;}`,
				`if we want to define array of objects we do it the same as regular arrays => let ppl: { }[ ] || let ppl: {name:string; age:number;}[ ]`,
			],
		},
	],
	'types-inference': [
		{
			title: 'types inference',
			notes: [
				`while using typescript we don't need to declare types if we already assigned the variables with initial value, as typescript would look for the most suitable type`,
				`for example when declaring variables without assignment we need to declare the type: let val: number; `,
				`however if we assigned the variable we don't need to declare the type: let val = 12; as typescript would infer the suitable type`,
			],
		},
	],
	'union-types': [
		{
			title: 'union types',
			notes: [
				`we can encounter some cases when we need to assign multiple types to the same variable`,
				`for instance if we want to a variable to be of different objects, or even different type like number`,
				`we can acheive that by using pipe sign "|" => let age: number | string or let obj: {name: string; age: number;} | {id: number; status: boolean;}`,
			],
		},
	],
	'types-aliases': [
		{
			title: 'types aliases',
			notes: [
				`typescript allows us to minimize our code when declaring complex types using type aliases`,
				`we can define our complex type then use it as a regular type without rewriting it's details`,
				`type Person = {name: string; age: number;}; now we have our complex type`,
				`let person: Person; or let person: Person = {name: '', age: 12}; or let person: Person[ ];`,
			],
		},
	],
	'function-types': [
		{
			title: 'function types',
			notes: [
				`when working with functions we would have multiple cases where we define or infer types`,
				`function add (a: number, b: number) { return a + b }  if we hovered over the function we would see that it's return value has a number type that we didn't define`,
				`well, typescript got that because it sees that we are adding two numbers so our return variable would be a number`,
				`we can also explicitly set the return type by adding ":" before the function body`,
				`funciton add (a: number, b: number): number | string { return a + b }`,
				`there is a special return type we can use when we are using the function for just printing values without returnning something and that void`,
				`function print (val: any): void { console.log(val) }`,
			],
		},
	],
	generics: [
		{
			title: 'generics',
			notes: [
				`when working with function parameters, if we set our parameter types to any, we would be able to use it with any types but typescript won't tell us about errors caused by type conflicts`,
				`function insertElement (array: any[ ], val: any) { return [val, ...array] } , it would return array of type any without infering any typescript types`,
				`so if we used methods not included in the type typescript won't tell us and we would get a runtime error`,
				`we can use generics to workaround this problem, we can convert our function to a generic function and it would let typescript infer the passed type to our return value`,
				`function insertElement<T>(array: T[ ], val: T) { return [val, ...array] }, our generic type (T) is only available inside this function`,
				`this way we make sure that both parameters are the same type but one is an array, and also our returned value would get the same type`,
				`using generics will get us back typescript features and we would get a hint at errors before runtime`,
				`we can also use generics to tell typescript which actual type should be used for the generic type placeholder without creating custom type`,
				`let numbers: Array<number> = [1, 2, 3];`,
			],
		},
	],
	'typescript-template': [
		{
			title: 'typescript template',
			notes: [
				`npx create-react-app my-app --template typescript => new project`,
				`npm install --save typescript @types/node @types/react @types/react-dom @types/jest => adding to existing project`,
				`the code would look similar without many changes, but one noticable change is that we have files.tsx instead of files.jsx`,
				`also inside our package.json we have some @types/... packages, and these act as translation bridges between our javascript packages and our typescript project`,
				`these extra @types/... helps packages that don't have typescript features like type annotations and other features to be included    `,
			],
		},
	],
	'props-and-typescript': [
		{
			title: 'props and typescript',
			notes: [
				`when building react components with typescript, we use the same patterns and techniques as javascript`,
				`it only differs when a component is recieving data as props or using functions as we would write them using typescript syntax`,
				`one of the typescript features we would notice, when having props as argument for our component, we would get a warning if we didn't use it also another error if we didn't set the type`,
				`to use types annotations with props we can use the following function Todos(props: {items: string[ ]}), however there is always a special props that is the children prop that we don't know it's type yet`,
				`as a workaround we can check the type for children prop then add it, however we would need to define types for our custom props and special props for each component`,
				`because we always have this props with some custom props and other special props we can use another way to write our components and that by using generics`,
				`we can convert our functional components into generic functions, const Todos: React.FC = (props) => {...}`,
				`and when we want to include our own props we add them between angle brackets (<>) however we are not defining new generic type here as React.FC is itself a generic function`,
				`using angle brackets (<>) we are adding our own props to our generic functional components without defining the default props`,
				`react will then merge our types defined between agnel brackets with default props such as props.children`,
				`const Todos: React.FC<{items: string[ ]}> = (props) => {...}, now if we chekced we would have props.children the default props and also props.items our own defined props`,
				`yet with another good ts features, if we tried to use our custom component with missing props, it would trigger an error before runetime`,
			],
		},
	],
	'data-model': [
		{
			title: 'data model',
			notes: [
				`in some cases like working with todos data, our data structure migh contain an object with multiple properties`,
				`we can add a data model to a separate typescript file defining the structure with one of these keywords (type, interface, class)`,
				`we would define a regular class like in javascript but with type annotations added to our properties`,
				`class Todo {id: string; text: string; constructor(todoText: string) {this.text = todoText; this.id = new Date().toISOString()}} export default Todo;`,
				`we can now use our class to create new todo items also we can use it as a type for our component props`,
				`import Todo from './todo`,
				`const Todos: React.FC<{items: todo[ ]}> = (props) => {...}`,
			],
		},
	],
	'form-submissions': [
		{
			title: 'form-submissions',
			notes: [
				`when working with events and typescript, we would define functions that handles different events`,
				`any event handler function would be recieving an event object that we get by default, however typescript won't know it's type so we need to explicitly set the type for our event object `,
				`type annotations for event objects would depend on the event type, for instance we have (React.FormEvent, React.MouseEvent, ...)`,
				`another great features we get from typescript is when attaching the event handler function to our element with the event type we need the specify the right event object type related with the event`,
				`for example if we have a function with event object with type React.FormEvent, and we tried passing this function to onClick event we would get an error as FormEvent can be used with onSubmit and not onClick`,
			],
		},
	],
	'working-with-refs': [
		{
			title: 'working with refs',
			notes: [
				`when working with refs, we would define our ref as we define it using javascript, however we would get an error because we are not explicit enough about the ref type`,
				`const inputRef = useRef(); this returns a ref that can be used on any element and that trigger an error because its not explicitly defined for our input `,
				`here come another use case for generics, we can add generic types to our ref to explicitly set it to our desired element`,
				`const inputRef = useRef<HTMLInputElement>(); however we would still get an error as it might be used for any element`,
				`we can get rid of this error by adding initial value to the ref, and as it's not connected at the beginning we can set it value to null`,
				`const inputRef = useRef<HTMLInputElement>(null);`,
				`we can then access our element by accessing its inputRef.current?.value`,
				`we add the extra (?) as TS doesn't that this ref would be accessed only when it's already connected`,
				`if you are 100% sure that the ref element won't be null we can use another syntax and that is (!) inputRef.current!.value`,
			],
		},
	],
	'function-props': [
		{
			title: 'function props',
			notes: [
				`when we pass pointers to functions as props to our component, we need to declare the type of the component and it's arguments aswell as the return type`,
				`const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {...}, here we used void as we aren't returnning a value`,
				`then we have the function defined anoher way like this: const addTodoHandler = (text: string) => {}`,
				`we can pass it to our component this way: <NewTodo onAddTodo={addTodoHandler} />`,
			],
		},
	],
	'managing-state': [
		{
			title: 'managing state',
			notes: [
				`working with state would be similar to regular javascript however with extra type annotations`,
				`for example if we want to have a state that holds array of todos we declare it this way`,
				`const [todos, setTodos] useState([ ]) , however this implementation our todos would always be an empty array `,
				`to change this we need to set a generic type to our useState`,
				`const [todos, setTodos] useState<Todo[ ]>([ ]) this way we get an empty string but it can then be filled with Todo items`,
			],
		},
	],
	'context-api': [
		{
			title: 'context api',
			notes: [
				`working with context is also similar to JS but with types added`,
				`const TodosContext = React.createContext<{items: Todo[ ]; addTodo: () => void; removeTodo: (id: string) => void;}>({items: [ ], addTodo: () => {}, removeTodo: (id: string) => {}})`,
				`const TodosContextProvider: React.FC = (props) => {return <TodosContext.Provider>{props.children}</TodosContext.Provider>}`,
				`then we can add the state managing functions and variables into our TodosContextProvider`,
				`we can also define our type outside the fn as we would need it in another places`,
				`type TodosContextObj = {items: Todo[ ]; addTodo: (text: string) => void; removeTodo: (id: string) => void;}`,
				`now we can update our type definition only in one place`,
				`export const TodosContext = React.createContext<TodosContextObj>({items: [ ], addTodo: () => {}, removeTodo: (id: string) => {}})`,
				`const contextValue: TodosContextObj = {items: todos, addTodo: addTodoHandler, removeTodo:removeTodoHandler}`,
				`const TodosContextProvider: React.FC = (props) => {return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>}`,
				`now we can get rid of state management logic from other components as we handle that inside our context `,
				`import {useContext} from 'react'`,
				`import {TodosContext} from '../store/todos-context'`,
				`const todosCtx = useContext(TodosContext)`,
				`now we can access todosCtx.items or todosCtx.addTodo, ...etc`,
				`finally we need to wrap our components with our context provider, we can do it by wrapping our rendered components in App.tsx with our provider`,
			],
		},
	],
	tsconfig: [
		{
			title: 'tsconfig',
			notes: [
				`we can add a config file to configure the way ts is compiled in our project we name this file tsconfig.json`,
				`target property specify to the compiler which javascript version it's compiled to`,
				`lib property indicates a list of built in libraries that we don't need to install, but we need to specify to use them`,
				`allowJs indicates where we want to use plain js files with our ts project or not`,
				`strict property indicates if strict mode is  enabled, that mean if we can implicitly use any types for variables and some other features`,
			],
		},
	],
};
