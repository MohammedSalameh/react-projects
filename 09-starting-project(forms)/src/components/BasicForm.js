import React, { useState, useEffect } from 'react';
import useInput2 from '../hooks/useInput2';

const BasicForm = (props) => {

	const {
		enteredValue: name,
    valueIsValid: nameIsValid,
		valueHasError: nameHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput2((name) => name.trim() !== '');

	const nameInputClasses = nameHasError
		? 'form-control invalid'
		: 'form-control';


  let formIsValid = false;
  if(nameIsValid) {
    formIsValid = true;
  }

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
      console.log('NOT VALID FORM BRO');
			return;
		}

		resetNameInput();
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<div className='control-group'>
				<div className={nameInputClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						value={name}
						type='text'
						id='name'
						onBlur={nameBlurHandler}
						onChange={nameChangeHandler}
					/>
					{nameHasError && <p>Name must not be empty</p>}
				</div>
				<div className='form-control'>
					<label htmlFor='name'>Last Name</label>
					<input type='text' id='name' />
				</div>
			</div>
			<div className='form-control'>
				<label htmlFor='name'>E-Mail Address</label>
				<input type='text' id='name' />
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
