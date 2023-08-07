import { Bar } from 'react-chartjs-2';

import styled from 'styled-components';

export type StyledChartProps = {
  w?: string;
  h?: string;
};

export const Container = styled.div<StyledChartProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  gap: 20px;

  border: 1px solid ${({ theme }) => theme.colors.grey100};
  box-shadow: 0px 7px 7px -5px rgba(0, 0, 0, 0.04),
    0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const Title = styled.div`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.grey500};
`;

export const ChartBar = styled(Bar)``;
