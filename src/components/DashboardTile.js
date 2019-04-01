import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tile = styled.a`
  display: block;
  color: inherit;
  width: 200px;
  height: 200px;
  padding: 28px 39px;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    color: black;
  }
`

const Title = styled.h1`
  font-size: 20px;
  line-height: 25px;
`

const Icon = styled.i`
  font-size: 80px;
  margin-bottom: 10px;
  opacity: .6;
`

function DashboardTile({ item: { id, title, icon }, onSelectItem }) {
  return (
    <Tile>
      <Icon className={icon}></Icon>
      <Title>{title}</Title>
    </Tile>
  );
}

DashboardTile.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
  onSelectItem: PropTypes.func
};
export default DashboardTile;