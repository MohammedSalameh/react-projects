import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
	const dummyArray = [
		{ id: '1', text: 'hello' },
		{ id: '2', text: 'world' },
	];

	return (
		<div className='App'>
			<Todos items={dummyArray} />
		</div>
	);
}

export default App;
