import styled, { css } from 'styled-components';

export interface DividerProps {
  color?: 'green' | 'grey';
  w?: string;
  h?: string;
  orientation?: 'vertical' | 'horizontal';
}

const orientationModifier = {
  vertical: css`
    border-left: 1px solid
      ${(props: DividerProps) =>
        props.color === 'green'
          ? ({ theme }) => theme.colors.green500
          : ({ theme }) => theme.colors.grey100};
    border-left-width: 1px;
  `,
  horizontal: css`
    border-bottom: 1px solid
      ${(props: DividerProps) =>
        props.color === 'green'
          ? ({ theme }) => theme.colors.green500
          : ({ theme }) => theme.colors.grey100};
  `,
};

export const Divider = styled.div<DividerProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: 4px;

  ${({ orientation = 'horizontal' }) => orientationModifier[orientation]}
`;
