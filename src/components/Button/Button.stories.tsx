import React from 'react';

import { Story, Meta } from '@storybook/react';
import { BrandApple, BrandGoogle, Mail } from 'tabler-icons-react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Buttons/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Button',
  variant: 'tertiary',
};

export const Transparent = Template.bind({});
Transparent.args = {
  children: 'Button',
  variant: 'transparent',
};

export const Apple = Template.bind({});
Apple.args = {
  children: 'Entrar com Apple ID',
  variant: 'apple',
  leftIcon: <BrandApple />,
  w: '400px',
};

export const Google = Template.bind({});
Google.args = {
  children: 'Entrar com Google',
  variant: 'google',
  leftIcon: <BrandGoogle strokeWidth={3} />,
  w: '400px',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
};

export const BorderedLeft = Template.bind({});
BorderedLeft.args = {
  children: 'Button',
  variant: 'secondary',
  border: 'left',
};

export const BorderedRight = Template.bind({});
BorderedRight.args = {
  children: 'Button',
  variant: 'secondary',
  border: 'right',
};

export const CustomWH = Template.bind({});
CustomWH.args = {
  children: 'Button',
  w: '50%',
  h: '60px',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Button',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'lg',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Button',
  leftIcon: <Mail />,
};
