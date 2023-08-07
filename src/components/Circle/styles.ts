import styled, { css } from 'styled-components';

export type StyledCircleProps = {
  circleColor?: 'green' | 'yellow' | 'red';
};

const colorModifier = {
  green: css`
    background-color: ${({ theme }) => theme.colors.green500};
  `,
  yellow: css`
    background-color: ${({ theme }) => theme.colors.yellow500};
  `,
  red: css`
    background-color: ${({ theme }) => theme.colors.red500};
  `,
};
export const Circle = styled.div<StyledCircleProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ circleColor = 'green' }) => colorModifier[circleColor]}
`;
