import React, { useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import SHOP_DATA from '../../assets/shop.data';

const ShopPage = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<div className='ShopPage'>
			{collections.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))}
		</div>
	);
};

export default ShopPage;
