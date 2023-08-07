import React from 'react';

import { DatePickerInputProps } from '@mantine/dates';
import { Story, Meta } from '@storybook/react';

import DateInputWRange from './DateInputWRange';

export default {
  title: 'Atoms/DateInputWRange',
  component: DateInputWRange,
} as Meta;

const Template: Story<DatePickerInputProps> = (args) => (
  <DateInputWRange {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Testing',
  placeholder: 'Choose one',
  valueFormat: 'DD/MM/YYYY',
};
