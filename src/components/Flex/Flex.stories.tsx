import React from 'react';

import { FlexProps } from '@mantine/core';
import { Story, Meta } from '@storybook/react';

import Button from '../Button';
import Flex from './Flex';

export default {
  title: 'Atoms/Display/Flex',
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
  bg: 'rgba(0, 0, 0, .3)',
  mih: 50,
  children: (
    <>
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  bg: 'rgba(0, 0, 0, .3)',
  mih: 50,
  children: (
    <>
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </>
  ),
  direction: 'column',
};

export const Center = Template.bind({});
Center.args = {
  bg: 'rgba(0, 0, 0, .3)',
  mih: 50,
  children: (
    <>
      <Button variant="secondary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="secondary">Button 3</Button>
    </>
  ),
  align: 'center',
  justify: 'center',
};
