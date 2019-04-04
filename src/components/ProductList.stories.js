import React from 'react';
import { storiesOf } from '@storybook/react';

import ProductList from './ProductList';

export const productProps = [
  {
    name: 'Product Name Long Name',
    image: '/images/cherry-coke.png',
    serial: 'UPC 123345651',
    sku: 'WIC 234234234',
    shelfPosition: 'Shelf X | Position X',
    inStock: true
  },
  {
    name: 'Product Name Long Name',
    image: '/images/cocacola.png',
    serial: 'UPC 123345652',
    sku: 'WIC 234234234',
    shelfPosition: 'Shelf X | Position X',
    inStock: false
  },
  {
    name: 'Product Name Long Name',
    image: '/images/cherry-fanta.png',
    serial: 'UPC 123345653',
    sku: 'WIC 234234234',
    shelfPosition: 'Shelf X | Position X',
    inStock: true
  },
  {
    name: 'Product Name Long Name',
    image: '/images/diet-coke.png',
    serial: 'UPC 123345654',
    sku: 'WIC 234234234',
    shelfPosition: 'Shelf X | Position X',
    inStock: false
  },
  {
    name: 'Product Name Long Name',
    image: '/images/diet-coke-gold.png',
    serial: 'UPC 123345655',
    sku: 'WIC 234234234',
    shelfPosition: 'Shelf X | Position X',
    inStock: true
  }
];


storiesOf('ProductList', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('ProductList Example', () =>
    <ProductList items={productProps} />
  )
