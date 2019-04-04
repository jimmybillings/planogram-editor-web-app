import React from 'react';
import { storiesOf } from '@storybook/react';

import PageHeaderCombined from './PageHeaderCombined';

export const pageHeaderProps = {
  title: 'WBA: 200 Stores',
  backUrl: "http://google.com",
  newAction: {
    url: 'http:goole.com',
    icon: 'fas fa-edit'
  }
}

export const subHeaderprops = {
  title: 'View Store Map',
  url: 'http://google.com'
};


storiesOf('PageHeaderCombined', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('Page Header Combined Example', () =>
    <PageHeaderCombined pageHeader={pageHeaderProps} pageSubHeader={subHeaderprops} />
  )
