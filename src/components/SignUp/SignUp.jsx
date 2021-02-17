import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.scss';

const SignUp = () => {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleChange = event => {
		const { name, value } = event.target;
		switch (name) {
			case 'displayName':
				setDisplayName(state => value);
				break;
			case 'email':
				setEmail(state => value);
				break;
			case 'password':
				setPassword(state => value);
				break;
			case 'confirmPassword':
				setConfirmPassword(state => value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match!");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });

			setDisplayName(state => '');
			setEmail(state => '');
			setPassword(state => '');
			setConfirmPassword(state => '');
		} catch (error) {
			console.log('ERROR SIGN UP USER\n', error.message);
		}
	};

	return (
		<div className='SignUp'>
			<h2 className='title'>I do not have an account</h2>
			<span>Sign up with your email and password</span>

			<form onSubmit={event => handleSubmit(event)}>
				<FormInput
					handleChange={handleChange}
					label='Display Name'
					name='displayName'
					type='text'
					value={displayName}
					required
				/>
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
				<FormInput
					handleChange={handleChange}
					label='Confirm Password'
					name='confirmPassword'
					type='password'
					value={confirmPassword}
					required
				/>

				<div className='buttons'>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
