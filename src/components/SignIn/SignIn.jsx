import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';

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
				<FormInput
					handleChange={handleChange}
					label='email'
					name='email'
					type='email'
					value={email}
					required
				/>
				<FormInput
					handleChange={handleChange}
					label='password'
					name='password'
					type='password'
					value={password}
					required
				/>

				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default SignIn;
