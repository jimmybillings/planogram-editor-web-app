import React from 'react';
import { storiesOf } from '@storybook/react';

import PageHeader from './PageHeader';

export const newAction = {
  url: 'http:goole.com',
  icon: 'fas fa-edit'
};

storiesOf('PageHeader', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('Title, Back button, New Action', () =>
    <PageHeader title='WBA: 200 Stores' backUrl="http://google.com" newAction={newAction} />
  )
  .add('Title, Back button, No New Action', () =>
    <PageHeader title='WBA: 200 Stores' backUrl="http://google.com" />
  )
  .add('Title, No Back button, New Action', () =>
    <PageHeader title='WBA: 200 Stores' newAction={newAction} />
  )
  .add('Title, No Back button, No New Action', () =>
    <PageHeader title='WBA: 200 Stores' />
  )
