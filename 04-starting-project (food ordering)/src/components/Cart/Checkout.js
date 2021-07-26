import classes from './Checkout.module.css';

import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [formInputs, setFormInputs] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalCodeInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const name = nameInputRef.current.value;
		const street = streetInputRef.current.value;
		const city = cityInputRef.current.value;
		const postalCode = postalCodeInputRef.current.value;

		const nameIsValid = !isEmpty(name);
		const streetIsValid = !isEmpty(street);
		const cityIsValid = !isEmpty(city);
		const postalCodeIsValid = isFiveChars(postalCode);

		setFormInputs({
			name: nameIsValid,
			street: streetIsValid,
			city: cityIsValid,
			postalCode: postalCodeIsValid,
		});

		const formIsValid =
			nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid;

		if (!formIsValid) {
			return;
		}

    props.onConfirm({name, street, city, postalCode})
	};

  const nameControlClasses = `${classes.control} ${formInputs.name ? '' : classes.invalid}`
  const streetControlClasses = `${classes.control} ${formInputs.street ? '' : classes.invalid}`
  const cityControlClasses = `${classes.control} ${formInputs.city ? '' : classes.invalid}`
  const postalCodeControlClasses = `${classes.control} ${formInputs.postalCode ? '' : classes.invalid}`

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={nameControlClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameInputRef} />
        {!formInputs.name && <p>Please enter a valid name</p> }
			</div>
			<div className={streetControlClasses}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetInputRef} />
        {!formInputs.street && <p>Please enter a valid street name</p> }
			</div>
			<div className={postalCodeControlClasses}>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputs.postalCode && <p>Please enter a valid postal code 5 characters long</p> }
			</div>
			<div className={cityControlClasses}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInputRef} />
        {!formInputs.city && <p>Please enter a valid city</p> }
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
