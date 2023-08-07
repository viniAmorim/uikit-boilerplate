import React from 'react';

import { Story, Meta } from '@storybook/react';

import ProgressBar from './ProgressBar';
import { StyledProgressBarProps } from './styles';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<StyledProgressBarProps> = (args) => (
  <ProgressBar {...args} />
);

export const Zero = Template.bind({});
Zero.args = {
  maxValue: 100,
  value: 0,
  height: 5,
};

export const Half = Template.bind({});
Half.args = {
  maxValue: 100,
  value: 50,
  height: 5,
};

export const Full = Template.bind({});
Full.args = {
  maxValue: 100,
  value: 100,
  height: 5,
};

export const Red = Template.bind({});
Red.args = {
  maxValue: 100,
  value: 75,
  height: 5,
  foregroundColor: 'red500',
};
