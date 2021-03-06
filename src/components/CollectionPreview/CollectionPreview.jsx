import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
	<div className='CollectionPreview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((elt, index) => index < 4)
				.map(({ id, ...otherProps }) => (
					<CollectionItem key={id} {...otherProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
