import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);

			setEmail(state => '');
			setPassword(state => '');
		} catch (error) {
			console.log('ERROR SIGN IN WITH EMAIL AND PASSWORD\n', error.message);
		}
	};

	return (
		<div className='SignIn'>
			<h2 className='title'>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={event => handleSubmit(event)}>
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
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn type='button'>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
