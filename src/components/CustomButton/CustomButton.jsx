import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? 'googleSignIn' : ''} CustomButton`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
