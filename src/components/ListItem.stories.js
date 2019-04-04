import React from 'react';
import { storiesOf } from '@storybook/react';

import ListItem from './ListItem';

export const productProps = {
  leftTitle: 'Screen 1',
  leftDesc: 'Beverage',
  rightTitle: '02/26/19',
  rightDesc: 'Last Update'
};

export const locationProps = {
  leftTitle: 'WBA00876',
  leftDesc: 'District 12345',
  rightTitle: 'Chicago, IL',
  rightDesc: '151 N State St FL 1st'
};

storiesOf('ListItem', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('ListItem Example Product', () =>
    <ListItem text={productProps} />
  ).add('ListItem Example Location', () =>
    <ListItem text={locationProps} />
  )
