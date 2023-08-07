import styled, { css } from 'styled-components';

export type StyledBadgeProps = {
  badgeColor?: 'green' | 'yellow' | 'red';
};

const colorModifier = {
  green: css`
    color: ${({ theme }) => theme.colors.green700};
    background: ${({ theme }) => theme.colors.green100};
  `,
  yellow: css`
    color: ${({ theme }) => theme.colors.yellow500};
    background: ${({ theme }) => theme.colors.yellow100};
  `,
  red: css`
    color: ${({ theme }) => theme.colors.red500};
    background: ${({ theme }) => theme.colors.red100};
  `,
};

export const Badge = styled.span<StyledBadgeProps>`
  font: 700 11px/17px 'Montserrat';
  display: inline;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  border-radius: 4px;

  ${({ badgeColor = 'red' }) => colorModifier[badgeColor]}
`;
