import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductListItem from './ProductListItem';

export const Items = styled.ul`

`
function ProductList({ items }) {
  return (
    <Items>
      {items.map(item => <ProductListItem key={item.serial} item={item} />)}
    </Items>
  );
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(ProductListItem.propTypes.item).isRequired
};

export default ProductList;
