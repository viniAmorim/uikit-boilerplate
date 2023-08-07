import styled from 'styled-components';

import { ColorOptions } from '../types';

export type StyledProgressBarProps = {
  height?: number;
  backgroundColor?: ColorOptions;
  foregroundColor?: ColorOptions;
  value: number;
  maxValue: number;
};

export const ProgressBarContainer = styled.div<
  Omit<StyledProgressBarProps, 'value' | 'maxValue'>
>`
  width: 100%;
  height: ${(props) => props.height}px;
  border-radius: 8px;
  background-color: ${({ theme, backgroundColor = 'grey100' }) =>
    theme.colors[backgroundColor]};
`;

export const Progress = styled.div<StyledProgressBarProps>`
  height: 100%;
  width: ${(props) => (props.value / props.maxValue) * 100}%;
  background-color: ${({ theme, foregroundColor = 'green500' }) =>
    theme.colors[foregroundColor]};
  border-radius: ${(props) =>
    (props.value / props.maxValue) * 100 === 100 ? '8px' : '8px 0px 0px 8px'};
`;
