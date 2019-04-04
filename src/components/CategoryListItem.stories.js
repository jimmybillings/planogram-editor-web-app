import React from 'react';
import { storiesOf } from '@storybook/react';

import CategoryListItem from './CategoryListItem';

export const categoryPropsRegular = {
  icon: 'fas fa-layer-group',
  text: 'Shelves',
  value: '6',
  chevron: true,
  warning: false
};

export const categoryPropsAlert = {
  icon: 'fas fa-list-ul',
  text: 'Out of Stock',
  value: '1',
  chevron: true,
  warning: true
};

export const categoryPropsNoChevron = {
  icon: 'fas fa-clock',
  text: 'Set Screen Hours',
  value: '6',
  chevron: false,
  warning: false
};

export const categoryPropsWithDate = {
  icon: 'far fa-calendar',
  text: 'Last Update',
  value: '10/12/19',
  chevron: false,
  warning: false
};


storiesOf('CategoryListItem', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('CategoryListItem Regular', () =>
    <CategoryListItem item={categoryPropsRegular} />
  )
  .add('CategoryListItem Alert', () =>
    <CategoryListItem item={categoryPropsAlert} />
  )
  .add('CategoryListItem No Chevron', () =>
    <CategoryListItem item={categoryPropsNoChevron} />
  )
  .add('CategoryListItem with Date', () =>
    <CategoryListItem item={categoryPropsWithDate} />
  )
