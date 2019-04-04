import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  width: 100%;
  height: 160px;
  list-style-type: none;
  background: white;
  padding: 7px 20px;
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
  }
`

export const ProductImage = styled.div`
  width: 80px;
  img {
    height: 140px;
    &.out-of-stock {
      opacity: .2;
    }
  }
`

export const ProductDetail = styled.div`
  margin-top: 20px;
  p {
    font-size: 12px;
    line-height: 20px;
    &.alert {
      color: #D0031A;
    }
  }
  p:first-child {
    font-weight: bold;
  }
`

export const ProductCheck = styled.div`
  float: right!important;
  i {
    margin-top: 60px;
    font-size: 30px;
    &.fa-times {
      color: #D0031A;
    }
    &.fa-check {
      color: #23C065;
    }
  }
`


function ProductListItem({ item: { name, image, serial, sku, shelfPosition, inStock } }) {
  return (
    <Item>
      <ProductImage>
        <img className={!inStock ? 'out-of-stock' : ''} src={image} />
      </ProductImage>
      <ProductDetail>
        <p>{name}</p>
        <p>{serial}</p>
        <p>{sku}</p>
        <p>{shelfPosition}</p>
        {!inStock && <p className="alert">Out of Stock</p>}
      </ProductDetail>
      <ProductCheck>
        {!inStock ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i>}
      </ProductCheck>
    </Item>
  );
}

ProductListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    serial: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    shelfPosition: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired
  })
};

export default ProductListItem;
