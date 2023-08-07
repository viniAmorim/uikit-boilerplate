import React from 'react';

import { Story, Meta } from '@storybook/react';

import PhoneInput, { IPhoneInputProps } from './PhoneInput';

export default {
  title: 'Atoms/PhoneInput',
  component: PhoneInput,
} as Meta;

const Template: Story<IPhoneInputProps> = (args) => <PhoneInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
  label: 'Telephone: ',
  placeholder: 'Test Placeholder',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Telephone: ',
  placeholder: 'Test Placeholder',
  isRequired: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Telephone: ',
  error: 'Test Error',
  placeholder: 'Test Placeholder',
};
