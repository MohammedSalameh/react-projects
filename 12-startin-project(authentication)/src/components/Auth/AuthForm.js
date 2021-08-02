import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

import { useHistory } from 'react-router-dom';

const AuthForm = () => {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const authCtx = useContext(AuthContext);

	const history = useHistory();
	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		// optional: add validation

		setIsLoading(true);
		if (isLogin) {
			const response = await fetch(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhRgUDRFYTZGcsW_jrme1vFR1xjk16QGs',
				{
					method: 'POST',
					body: JSON.stringify({
						email: enteredEmail,
						password: enteredPassword,
						returnSecureToken: true,
					}),
					headers: { 'Content-Type': 'application/json' },
				}
			);

			const data = await response.json();

			if (!response.ok) {
				let errorMessage = 'Authentication failed';
				alert(errorMessage);
			}

			authCtx.login(data.idToken);
			history.replace('/profile');
		} else {
			const response = await fetch(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhRgUDRFYTZGcsW_jrme1vFR1xjk16QGs',
				{
					method: 'POST',
					body: JSON.stringify({
						email: enteredEmail,
						password: enteredPassword,
						returnSecureToken: true,
					}),
					headers: { 'Content-Type': 'application/json' },
				}
			);

			const data = await response.json();

			if (!response.ok) {
				let errorMessage = 'Authentication failed';
				if (data && data.error && data.error.message) {
					errorMessage = data.error.message;
				}

				alert(errorMessage);
			}

			history.replace('/profile');
		}
		setIsLoading(false);
	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input ref={emailInputRef} type='email' id='email' required />
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						ref={passwordInputRef}
						type='password'
						id='password'
						required
					/>
				</div>
				<div className={classes.actions}>
					{!isLoading && (
						<button>{isLogin ? 'Login' : 'Create Account'}</button>
					)}
					{isLoading && <p>Sending Request...</p>}
					<button
						type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? 'Create new account' : 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
