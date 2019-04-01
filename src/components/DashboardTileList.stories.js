import React from 'react';
import { storiesOf } from '@storybook/react';

import DashboardTileList from './DashboardTileList';
import { actions } from './DashboardTile.stories';

export const tiles = [
  { id: '1', title: 'Planogram Manager', icon: 'fas fa-th' },
  { id: '2', title: 'Item Manager', icon: 'fas fa-list-ul' },
  { id: '3', title: 'Pricing Manager', icon: 'fas fa-dollar-sign' },
  { id: '4', title: 'Promotion Manager', icon: 'fas fa-percent' },
  { id: '5', title: 'Custom Alerts', icon: 'fas fa-exclamation-triangle' },
  { id: '6', title: 'Location Manager', icon: 'fas fa-map-marker-alt' },
  { id: '7', title: 'Access Manager', icon: 'fas fa-lock' },
  { id: '8', title: 'Cooler Analytics', icon: 'fas fa-chart-pie' },
];

storiesOf('DashboardTileList', module)
  .add('Home Screen', () => <DashboardTileList tiles={tiles} {...actions} />)
