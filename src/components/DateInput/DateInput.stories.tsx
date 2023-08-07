import React from 'react';

import { DateInputProps } from '@mantine/dates';
import { Story, Meta } from '@storybook/react';

import DateInput from './DateInput';

export default {
  title: 'Atoms/DateInput',
  component: DateInput,
} as Meta;

const Template: Story<DateInputProps> = (args) => <DateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Testing',
  placeholder: 'Choose one',
  valueFormat: 'DD/MM/YYYY',
};
