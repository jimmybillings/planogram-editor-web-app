import React from 'react';
import { storiesOf } from '@storybook/react';

import CategoryList from './CategoryList';
const props = [{
  icon: 'fas fa-layer-group',
  text: 'Shelves',
  value: '6',
  chevron: true,
  warning: false
},
{
  icon: 'fas fa-list-ul',
  text: 'Out of Stock',
  value: '1',
  chevron: true,
  warning: true
}, {
  icon: 'fas fa-clock',
  text: 'Set Screen Hours',
  value: '6',
  chevron: false,
  warning: false
}, {
  icon: 'far fa-calendar',
  text: 'Last Update',
  value: '10/12/19',
  chevron: false,
  warning: false
}];


storiesOf('CategoryList', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('CategoryList Example Product', () =>
    <CategoryList items={props} />
  )
