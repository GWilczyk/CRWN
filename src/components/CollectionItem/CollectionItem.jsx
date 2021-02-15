import React from 'react';

import './CollectionItem.scss';

const CollectionItem = ({ imageUrl, name, price }) => (
	<div className='CollectionItem'>
		<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
		<div className='collectionItemFooter'>
			<span className='name'>{name}</span>
			<span className='price'>${price}</span>
		</div>
	</div>
);

export default CollectionItem;
