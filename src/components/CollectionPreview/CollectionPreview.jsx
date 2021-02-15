import React from 'react';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
	<div className='CollectionPreview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((elt, index) => index < 4)
				.map(({ id, name }) => (
					<div key={id}>{name}</div>
				))}
		</div>
	</div>
);

export default CollectionPreview;
