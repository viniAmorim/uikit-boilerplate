/* eslint-disable no-alert */
import React from 'react';

import { Story, Meta } from '@storybook/react';

import Text, { ParagraphProps } from './Text';

export default {
  title: 'Atoms/Typography/Text',
  component: Text,
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Ad astra per aspera',
};

export const FontColor = Template.bind({});
FontColor.args = {
  children: 'Ad astra per aspera',
  fontColor: 'pink500',
};

export const Weight = Template.bind({});
Weight.args = {
  children: 'Ad astra per aspera',
  weight: '300',
};

export const FontSize = Template.bind({});
FontSize.args = {
  children: 'Ad astra per aspera',
  fontSize: '16px',
};

export const LineHeight = Template.bind({});
LineHeight.args = {
  children: 'Ad astra per aspera',
  lineHeight: '26px',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Ad astra per aspera',
  onClick: () => alert('Click!'),
};
