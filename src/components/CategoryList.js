import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CategoryListItem from './CategoryListItem';

export const Items = styled.ul`

`
function CategoryList({ items }) {
  return (
    <Items>
      {items.map(item => <CategoryListItem key={item.text} item={item} />)}
    </Items>
  );
}

CategoryList.propTypes = {
  items: PropTypes.arrayOf(CategoryListItem.propTypes.item).isRequired
};

export default CategoryList;
