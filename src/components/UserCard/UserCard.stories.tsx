import React from 'react';

import { Story, Meta } from '@storybook/react';

import UserCard, { UserCardProps } from './UserCard';

export default {
  title: 'Atoms/Cards/UserCard',
  component: UserCard,
} as Meta;

const Template: Story<UserCardProps> = (args) => (
  <div style={{ width: '260px' }}>
    <UserCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Vinicius Amorim',
  email: 'vinicius@mail.me',
};
