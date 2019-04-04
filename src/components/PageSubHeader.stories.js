import React from 'react';
import { storiesOf } from '@storybook/react';

import PageSubHeader from './PageSubHeader';

export const props = {
  title: 'View Store Map',
  url: 'http://google.com'
};

export const props2 = {
  title: 'All: A-Z',
  url: 'http://google.com',
  leftAction: '52 Products',
  rightAction: 'fas fa-sliders-h'
};

storiesOf('PageSubHeader', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('Page Sub Header Example', () =>
    <PageSubHeader {...props} />
  )
  .add('Page Sub Header Example with more options', () =>
    <PageSubHeader {...props2} />
  )
