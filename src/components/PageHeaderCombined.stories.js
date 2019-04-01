import React from 'react';
import { storiesOf } from '@storybook/react';

import PageHeaderCombined from './PageHeaderCombined';

export const props = {
  title: 'View Store Map',
  url: 'http://google.com'
};

storiesOf('PageHeaderCombined', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('Page Header Combined Example', () =>
    <PageHeaderCombined />
  )
