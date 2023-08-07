import React from 'react';

import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import * as Styled from './styles';

export interface ChartProps extends Styled.StyledChartProps {
  title?: string;
  labels: string[];
  data: number[];
}

const BarChart = ({
  title,
  labels,
  data,
  w = '1120px',
  h = '276px',
  ...rest
}: ChartProps) => {
  Chart.register(CategoryScale);

  const maxDataValue = Math.max(...data);
  const suggestedMax = maxDataValue + maxDataValue * 0.08;

  return (
    <Styled.Container w={w} h={h} {...rest}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.ChartBar
        width={1120}
        height={210}
        data={{
          labels,
          datasets: [
            {
              data,
              borderWidth: 1,
              borderRadius: 3,
              backgroundColor: '#FF4870',
              barThickness: 70,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            datalabels: {
              align: 'top',
              anchor: 'end',
              labels: {
                value: {
                  color: '#FF4870',
                  formatter(value: number) {
                    return value.toLocaleString('pt-BR');
                  },
                },
              },
            },
          },
          scales: {
            y: {
              suggestedMax,
              grid: {
                display: false,
              },
              display: false,
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
        plugins={[ChartDataLabels]}
      />
    </Styled.Container>
  );
};

export default BarChart;
