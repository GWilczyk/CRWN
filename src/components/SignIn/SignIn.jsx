import React, { useState } from 'react';

import './SignIn.scss';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = event => {
		const { name, value } = event.target;

		name === 'email' && setEmail(state => value);
		name === 'password' && setPassword(state => value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		setEmail(state => '');
		setPassword(state => '');
	};

	return (
		<div className='SignIn'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={() => handleSubmit}>
				<input
					id='email'
					name='email'
					onChange={event => handleChange(event)}
					type='email'
					value={email}
					required
				/>
				<label htmlFor='email'>Email</label>
				<input
					id='password'
					name='password'
					onChange={event => handleChange(event)}
					type='password'
					value={password}
					required
				/>
				<label htmlFor='password'>Password</label>

				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default SignIn;
