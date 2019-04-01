import React from 'react';
import { storiesOf } from '@storybook/react';

import PageSubHeader from './PageSubHeader';

export const props = {
  title: 'View Store Map',
  url: 'http://google.com'
};

storiesOf('PageSubHeader', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('Page Sub Header Example', () =>
    <PageSubHeader {...props} />
  )
