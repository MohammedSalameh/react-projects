import React, { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
	const newPasswordInputRef = useRef();

	const { token } = useContext(AuthContext);

	const submitHandler = async (event) => {
		event.preventDefault();

		const enteredPassword = newPasswordInputRef.current.value;

		// validation

		const response = await fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAhRgUDRFYTZGcsW_jrme1vFR1xjk16QGs',
			{
				method: 'POST',
				body: JSON.stringify({
					idToken: token,
					password: enteredPassword,
					returnSecureToken: true,
				}),
				headers: { 'Content-Type': 'application/json' },
			}
		);

		const data = await response.json();

		if (!response.ok) {
			if (data.error.message) {
				alert(data.error.message);
			}
		} else {
      alert(data.error.message)
		}
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<div className={classes.control}>
				<label htmlFor='new-password'>New Password</label>
				<input ref={newPasswordInputRef} minLength='7' type='password' id='new-password' />
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
