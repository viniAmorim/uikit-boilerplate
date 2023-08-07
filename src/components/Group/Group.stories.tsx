import React from 'react';

import { GroupProps } from '@mantine/core';
import { Story, Meta } from '@storybook/react';

import Button from '../Button';
import Group from './Group';

export default {
  title: 'Atoms/Display/Group',
  component: Group,
} as Meta;

const Template: Story<GroupProps> = (args) => <Group {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </>
  ),
};

export const Spacing = Template.bind({});
Spacing.args = {
  spacing: 'xl',
  children: (
    <>
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </>
  ),
};

export const Grow = Template.bind({});
Grow.args = {
  grow: true,
  children: (
    <>
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </>
  ),
};
