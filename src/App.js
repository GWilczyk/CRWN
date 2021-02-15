import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import SignInSignUpPage from './pages/signin_signuppage/SignInSignUpPage';

import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/signin' component={SignInSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
