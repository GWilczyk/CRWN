import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LOGO } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
	return (
		<div className='Header'>
			<Link to='/' className='LogoContainer'>
				<LOGO className='Logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/'>
					CONTACT
				</Link>
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			</div>
		</div>
	);
};

export default Header;
