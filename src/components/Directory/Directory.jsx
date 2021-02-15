import React, { useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import SECTIONS_DATA from '../../assets/sections.data';

import './Directory.scss';

const Directory = () => {
	const [sections, setSections] = useState(SECTIONS_DATA);

	return (
		<div className='Directory'>
			{sections.map(({ id, ...otherProps }) => (
				<MenuItem key={id} {...otherProps} />
			))}
		</div>
	);
};

export default Directory;
