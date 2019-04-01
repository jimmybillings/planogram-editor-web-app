import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DashboardItem from './DashboardItem';

export const item = {
    id: '1',
    title: 'Test Dashboard Item',
    icon: 'Some icon'
};

export const actions = {
    onSelectItem: action('onSelectItem'),
};

storiesOf('DashboardItem', module)
    .add('default', () => <DashboardItem item={item} {...actions} />)
