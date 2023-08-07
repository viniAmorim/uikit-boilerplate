import React from 'react';

import { Story, Meta } from '@storybook/react';

import FilePicker, { FilePickerProps } from './FilePicker';

export default {
  title: 'Atoms/FilePicker',
  component: FilePicker,
} as Meta;

const Template: Story<FilePickerProps> = (args) => (
  <div style={{ width: 'fit-content' }}>
    <FilePicker {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Selecione um arquivo',
};
