import React from 'react';

import { Story, Meta } from '@storybook/react';

import InfoCard, { InfoCardProps } from './InfoCard';

export default {
  title: 'Atoms/Cards/InfoCard',
  component: InfoCard,
} as Meta;

const Template: Story<InfoCardProps> = (args) => (
  <div style={{ width: '300px' }}>
    <InfoCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Robert Santos',
  info: 12,
};
