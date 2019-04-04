import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

export const Items = styled.ul`

`
function List({ items }) {
  return (
    <Items>
      {items.map(item => <ListItem key={item.leftTitle} text={item} />)}
    </Items>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(ListItem.propTypes.text).isRequired
};

export default List;
