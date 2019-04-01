import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DashboardTile from './DashboardTile';

export const item = {
  id: '1',
  title: 'Planogram Manager',
  icon: 'fas fa-th'
};

export const item2 = {
  id: '2',
  title: 'Item Manager',
  icon: 'fas fa-list-ul'
};

export const item3 = {
  id: '3',
  title: 'Pricing Manager',
  icon: 'fas fa-dollar-sign'
};

export const actions = {
  onSelectItem: action('onSelectItem'),
};

storiesOf('DashboardTile', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('Planogram Manager', () => <DashboardTile item={item} {...actions} />)
  .add('Item Manager', () => <DashboardTile item={item2} {...actions} />)
  .add('Pricing Manager', () => <DashboardTile item={item3} {...actions} />)
