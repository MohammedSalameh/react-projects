import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
	const {
		value: enteredName,
    isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
	} = useInput(value => value.trim() !=='');

  const {
		value: enteredEmail,
    isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
	} = useInput(value => value.trim() !=='' && value.includes('@'));


	// if you need the value after every keystroke useState
	// if interested in value only ONCE useRef
	// const nameInputRef = useRef();

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName);
		console.log(enteredEmail);

		resetNameInput();
    resetEmailInput();
		// const enteredValue = nameInputRef.current.value;
		// console.log(enteredValue);
		// nameInputRef.current.value = ''; => NOT IDEAL, DONT MANIPULATE THE DOM
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					type='text'
					id='name'
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className='error-text'>Name must not be empty</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your email</label>
				<input
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					type='text'
					id='email'
					value={enteredEmail}
				/>
				{emailInputHasError && <p className='error-text'>email must valid</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
