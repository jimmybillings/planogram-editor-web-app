import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  width: 100%;
  height: 70px;
  list-style-type: none;
  background: white;
  padding: 20px;
  border-bottom: 1px solid #e2e2e2;
  > div {
    float: left;
    h2 {
      text-transform: capitalize;
      font-size: 22px;
    }
    span {
      color: #969696;
      font-size:12px;
    }
  }
  &:hover {
    background:#e2e2e2;
    i {
      color: black;
    }
  }
`
const ItemLeft = styled.div`
  text-align: left;
  width: 70%;
  i {
    display: block;
    float: left;
    margin-top: 7px;
    margin-right: 10px;
  }
  &.alert {
    i, h2 {
      color:red;
    }
  }
`

const ItemRight = styled.div`
  width: 30%;
  text-align: right;
  > div {
    float: right;
    min-width: 30px;
    height: 45px;
    > i {
      margin-top: 7px;
      color: #969696;
    }
  }
  &.alert {
    h2 {
      color:red;
    }
  }
`

function CategoryListItem({ item: { icon, text, value, chevron, warning } }) {
  return (
    <Item>
      <ItemLeft className={warning ? 'alert' : ''}>
        <i className={icon}></i>
        <h2>{text}</h2>
      </ItemLeft>
      <ItemRight className={warning ? 'alert' : ''}>
        {chevron && <div>
          <i className="fas fa-chevron-right"></i>
        </div>}
        <div>
          <h2>{value}</h2>
        </div>
      </ItemRight>
    </Item>
  );
}

CategoryListItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    chevron: PropTypes.bool.isRequired,
    warning: PropTypes.bool.isRequired
  })
};

export default CategoryListItem;
