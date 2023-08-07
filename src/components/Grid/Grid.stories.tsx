import React from 'react';

import { GridProps } from '@mantine/core';
import { Story, Meta } from '@storybook/react';

import Button from '../Button';
import Grid from './Grid';

export default {
  title: 'Atoms/Display/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  bg: 'rgba(0, 0, 0, .3)',
  mih: 50,
  gutter: 50,
  children: (
    <>
      <Grid.Col span="auto" bg="blue">
        <Button variant="secondary">Button 1</Button>
      </Grid.Col>
      <Grid.Col span={6}>
        <Button variant="secondary">Button 2</Button>
      </Grid.Col>
      <Grid.Col span="auto" bg="blue">
        <Button variant="secondary">Button 3</Button>
      </Grid.Col>
    </>
  ),
};
