import React from 'react';

import { StackProps } from '@mantine/core';
import { Story, Meta } from '@storybook/react';

import Button from '../Button';
import Stack from './Stack';

export default {
  title: 'Atoms/Display/Stack',
  component: Stack,
} as Meta;

const Template: Story<StackProps> = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {
  h: 300,
  children: (
    <>
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </>
  ),
};

export const Center = Template.bind({});
Center.args = {
  h: 300,
  children: (
    <>
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </>
  ),
  align: 'center',
};

export const Space = Template.bind({});
Space.args = {
  h: 300,
  children: (
    <>
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </>
  ),
  justify: 'space-between',
};
