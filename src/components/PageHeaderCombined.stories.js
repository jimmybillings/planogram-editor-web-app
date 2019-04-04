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

export const pageHeaderProductProps = {
  title: 'WBA00876',
  newAction: {
    url: 'http:goole.com',
    icon: 'fas fa-search'
  }
}

export const subHeaderProductprops = {
  title: 'All: A-Z',
  url: 'http://google.com',
  leftAction: '52 Products',
  rightAction: 'fas fa-sliders-h'
};


storiesOf('PageHeaderCombined', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('Page Header Combined Example', () =>
    <PageHeaderCombined pageHeader={pageHeaderProps} pageSubHeader={subHeaderprops} />
  )
  .add('Page Header Combined Product Example', () =>
    <PageHeaderCombined pageHeader={pageHeaderProductProps} pageSubHeader={subHeaderProductprops} />
  )
