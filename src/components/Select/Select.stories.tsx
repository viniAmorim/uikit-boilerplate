import React from 'react';

import { SelectProps } from '@mantine/core';
import { Story, Meta } from '@storybook/react';

import Select from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Testing',
  data: [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ],
  placeholder: 'Choose one',
};
