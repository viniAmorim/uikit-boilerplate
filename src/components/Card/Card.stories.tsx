import React from 'react';

import { Story, Meta } from '@storybook/react';

import Card, { CardProps } from './Card';

export default {
  title: 'Atoms/Cards/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
  <div style={{ width: '260px' }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  notification: false,
  title: 'Park Shopping',
  city: 'DF / Brasilia',
  clients: 32432,
  date: '12/12/12',
  active: true,
  actualInvoices: 123212,
  totalInvoices: 200000,
};

export const Inactive = Template.bind({});
Inactive.args = {
  notification: false,
  title: 'Park Shopping',
  city: 'DF / Brasilia',
  clients: 32432,
  date: '12/12/12',
  active: false,
  actualInvoices: 123212,
  totalInvoices: 200000,
};

export const Notification = Template.bind({});
Notification.args = {
  notification: true,
  title: 'Park Shopping',
  city: 'DF / Brasilia',
  clients: 32432,
  date: '12/12/12',
  active: true,
  actualInvoices: 123212,
  totalInvoices: 200000,
};
