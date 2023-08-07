import { Checkbox as CheckboxComponent } from '@mantine/core';
import styled, { css } from 'styled-components';

export type StyledCheckboxProps = {
  background?: 'purple900';
};

const colorModifier = {
  purple900: css`
    :checked {
      background-color: ${({ theme }) => theme.colors.purple900};
      border-color: ${({ theme }) => theme.colors.purple900};
    }
  `,
};

export const Checkbox = styled(CheckboxComponent)<StyledCheckboxProps>`
  & .mantine-Checkbox-input {
    cursor: pointer;
    ${({ background = 'purple900' }) => colorModifier[background]}
  }
`;
