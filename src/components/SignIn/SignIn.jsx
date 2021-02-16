import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

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
			<div className='title'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
			</div>

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

				<div className='buttons'>
					<CustomButton type='submit' value='Submit'>
						Sign In
					</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
