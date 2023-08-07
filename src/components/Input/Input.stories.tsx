import React from 'react';

import { TextInputProps } from '@mantine/core';
import { Story, Meta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<TextInputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Teste',
  placeholder: 'Teste',
};

export const WithAsterisk = Template.bind({});
WithAsterisk.args = {
  label: 'Teste',
  placeholder: 'Teste',
  withAsterisk: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Teste',
  placeholder: 'Teste',
  error: 'Test Error',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: 'Teste',
  placeholder: 'Teste',
  description: 'Descrição',
};
