import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Arrow, ArrowProps } from './Arrow';

export default {
  title: 'Atoms/Arrow',
  component: Arrow,
} as Meta;

const Template: Story<ArrowProps> = (args) => <Arrow {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 53,
};
