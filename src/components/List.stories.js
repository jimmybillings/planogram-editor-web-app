import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './List';

export const productProps = [
  {
    leftTitle: 'Screen 1',
    leftDesc: 'Beverage',
    rightTitle: '02/26/19',
    rightDesc: 'Last Update'
  },
  {
    leftTitle: 'Screen 2',
    leftDesc: 'Beverage',
    rightTitle: '02/26/19',
    rightDesc: 'Last Update'
  },
  {
    leftTitle: 'Screen 3',
    leftDesc: 'Beverage',
    rightTitle: '02/26/19',
    rightDesc: 'Last Update'
  },
  {
    leftTitle: 'Screen 4',
    leftDesc: 'Beverage',
    rightTitle: '02/26/19',
    rightDesc: 'Last Update'
  },
  {
    leftTitle: 'Screen 5',
    leftDesc: 'Beverage',
    rightTitle: '02/26/19',
    rightDesc: 'Last Update'
  },
  {
    leftTitle: 'Screen 6',
    leftDesc: 'Beverage',
    rightTitle: '02/26/19',
    rightDesc: 'Last Update'
  }];

export const locationProps = [
  {
    leftTitle: 'WBA00876',
    leftDesc: 'District 12345',
    rightTitle: 'Chicago, IL',
    rightDesc: '151 N State St FL 1st'
  },
  {
    leftTitle: 'WBA00877',
    leftDesc: 'District 12345',
    rightTitle: 'Chicago, IL',
    rightDesc: '151 N State St FL 1st'
  },
  {
    leftTitle: 'WBA00878',
    leftDesc: 'District 12345',
    rightTitle: 'Chicago, IL',
    rightDesc: '151 N State St FL 1st'
  },
  {
    leftTitle: 'WBA00879',
    leftDesc: 'District 12345',
    rightTitle: 'Chicago, IL',
    rightDesc: '151 N State St FL 1st'
  },
  {
    leftTitle: 'WBA00880',
    leftDesc: 'District 12345',
    rightTitle: 'Chicago, IL',
    rightDesc: '151 N State St FL 1st'
  },
  {
    leftTitle: 'WBA00881',
    leftDesc: 'District 12345',
    rightTitle: 'Chicago, IL',
    rightDesc: '151 N State St FL 1st'
  }];

storiesOf('List', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('List Example Product', () =>
    <List items={productProps} />
  )
  .add('List Example Location', () =>
    <List items={locationProps} />
  )
