import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'INATIVO',
};

export const Active = Template.bind({});
Active.args = {
  children: 'ATIVO',
  badgeColor: 'green',
};

export const Waiting = Template.bind({});
Waiting.args = {
  children: 'AGUARDANDO',
  badgeColor: 'yellow',
};
