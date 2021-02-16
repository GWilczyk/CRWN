import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import SignInSignUpPage from './pages/signin_signuppage/SignInSignUpPage';

import { auth } from './firebase/firebase.utils';

import './App.css';

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			user ? setCurrentUser(user) : setCurrentUser(null);
			console.log('user: ', user);
		});
		return () => unsubscribeFromAuth();
	});

	return (
		<div>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/signin' component={SignInSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
