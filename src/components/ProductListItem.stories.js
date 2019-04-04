import React from 'react';
import { storiesOf } from '@storybook/react';

import ProductListItem from './ProductListItem';


export const productListItemOutOfStockProps = {
  name: 'Product Name Long Name',
  image: '/images/cocacola.png',
  serial: 'UPC 123345654',
  sku: 'WIC 234234234',
  shelfPosition: 'Shelf X | Position X',
  inStock: false
}

export const productListItemInStockProps = {
  name: 'Product Name Long Name',
  image: '/images/cherry-coke.png',
  serial: 'UPC 123345655',
  sku: 'WIC 234234234',
  shelfPosition: 'Shelf X | Position X',
  inStock: true
}

storiesOf('ProductListItem', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('ProductListItem In Stock', () =>
    <ProductListItem item={productListItemInStockProps} />
  )
  .add('ProductListItem Out for stock', () =>
    <ProductListItem item={productListItemOutOfStockProps} />
  )

