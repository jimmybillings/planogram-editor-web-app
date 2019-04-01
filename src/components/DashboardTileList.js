import React from 'react';
import PropTypes from 'prop-types';
import DashboardTile from './DashboardTile';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
`

const Item = styled.li`
    list-style-type: none;
    margin: 20px;
    float: left;
`

function DashboardTileList({ tiles, onSelectItem }) {
    const events = {
        onSelectItem,
    };

    return (
        <List>
            {tiles.map(tile =>
                <Item key={tile.id}>
                    <DashboardTile item={tile} {...events} />
                </Item>
            )}
        </List>
    );
}

DashboardTileList.propTypes = {
    tiles: PropTypes.arrayOf(DashboardTile.propTypes.item).isRequired,
};

export default DashboardTileList;