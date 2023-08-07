import React from 'react';

import { Story, Meta } from '@storybook/react';

import Divider, { DividerProps } from './Divider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
};

export const Width = Template.bind({});
Width.args = {
  w: '50%',
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
};
