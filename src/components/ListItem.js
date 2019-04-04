import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  width: 100%;
  height: 65px;
  list-style-type: none;
  background: white;
  padding: 10px 21px;
  border-bottom: 1px solid #e2e2e2;
  > div {
    width: 50%;
    float: left;
    h4 {
      margin-top: 5px;
      text-transform: capitalize;
      font-size: 20px;
    }
    span {
      color: #969696;
      font-size:12px;
    }
  }
  &:hover {
    i {
      color: black;
    }
  }
`
const ItemLeft = styled.div`
  text-align: left;
`

const ItemRight = styled.div`
  text-align: right;
  > div {
    float: right;
    min-width: 30px;
    height: 45px;
    > i {
      margin-top: 13px;
      color: #969696;
    }
  }
`

function ListItem({ text: { leftTitle, leftDesc, rightTitle, rightDesc } }) {
  return (
    <Item>
      <ItemLeft>
        <span>{leftDesc}</span>
        <h4>{leftTitle}</h4>
      </ItemLeft>
      <ItemRight>
        <div>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div>
          <span>{rightDesc}</span>
          <h4>{rightTitle}</h4>
        </div>
      </ItemRight>
    </Item>
  );
}

ListItem.propTypes = {
  text: PropTypes.shape({
    leftTitle: PropTypes.string.isRequired,
    leftDesc: PropTypes.string.isRequired,
    rightTitle: PropTypes.string.isRequired,
    rightDesc: PropTypes.string.isRequired
  })
};

export default ListItem;
