import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Circle, CircleProps } from './Circle';

export default {
  title: 'Atoms/Circle',
  component: Circle,
} as Meta;

const Template: Story<CircleProps> = (args) => <Circle {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'success',
};
