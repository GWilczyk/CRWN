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
		switch (name) {
			case 'email':
				setEmail(state => value);
				break;
			case 'password':
				setPassword(state => value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		setEmail(state => '');
		setPassword(state => '');
	};

	return (
		<div className='SignIn'>
			<h2 className='title'>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={() => handleSubmit}>
				<FormInput
					handleChange={handleChange}
					label='Email'
					name='email'
					type='email'
					value={email}
					required
				/>
				<FormInput
					handleChange={handleChange}
					label='Password'
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
