import React from 'react';
import { storiesOf } from '@storybook/react';

import TitleText from './TitleText';


storiesOf('TitleText', module)
  .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
  .add('Text Title example 1', () =>
    <TitleText text="Search for a store:" />
  )
  .add('Text Title example 2', () =>
    <TitleText text="Select the store you'd like to edit" />
  )
