import React from 'react';

import { Story, Meta } from '@storybook/react';

import BarChart, { ChartProps } from './BarChart';

export default {
  title: 'Atoms/Charts/BarChart',
  component: BarChart,
} as Meta;

const Template: Story<ChartProps> = (args) => (
  <div style={{ height: '276px' }}>
    <BarChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Consumo de notas fiscais (todos os clientes)',
  data: [
    15000, 12000, 14000, 12222, 13333, 20111, 17333, 0, 18888, 13777, 22001,
    1441,
  ],
  labels: [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ],
};

export const Sizes = Template.bind({});
Sizes.args = {
  title: 'Consumo de notas fiscais (todos os clientes)',
  data: [
    15000, 12000, 14000, 12222, 13333, 20111, 17333, 0, 18888, 13777, 22001,
    1441,
  ],
  labels: [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ],
  w: '1400px',
  h: '350px',
};
