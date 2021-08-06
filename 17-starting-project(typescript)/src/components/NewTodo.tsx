import React, { useRef } from 'react';
import Todo from '../models/todo';
import classes from './NewTodo.module.css';

interface Props {
	addTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = (props) => {
	//check mdn if unsure
	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = inputRef.current?.value;

		if (enteredText?.trim().length === 0) {
			return;
		}
		props.addTodo(enteredText!);
	};
	return (
		<form onSubmit={onSubmitHandler} className={classes.form}>
			<label htmlFor='text'>todo text</label>
			<input ref={inputRef} type='text' id='text' />
			<button>add todo</button>
		</form>
	);
};

export default NewTodo;
