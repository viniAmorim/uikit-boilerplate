import React from 'react';

import { Story, Meta } from '@storybook/react';

import Steps, { StepsProps } from './Steps';

export default {
  title: 'Atoms/Steps',
  component: Steps,
} as Meta;

const Template: Story<StepsProps> = (args) => <Steps {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleOne: 'test',
  titleTwo: 'test',
  titleThree: 'test',
};

export const First = Template.bind({});
First.args = {
  stepOne: true,
  titleOne: 'test',
  titleTwo: 'test',
  titleThree: 'test',
};

export const Second = Template.bind({});
Second.args = {
  stepOne: true,
  stepTwo: true,
  titleOne: 'test',
  titleTwo: 'test',
  titleThree: 'test',
};

export const Third = Template.bind({});
Third.args = {
  stepOne: true,
  stepTwo: true,
  stepThree: true,
  titleOne: 'test',
  titleTwo: 'test',
  titleThree: 'test',
};
