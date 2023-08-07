import {
  Button as ButtonComponent,
  createPolymorphicComponent,
  ButtonProps as MantineButtonProps,
} from '@mantine/core';
import styled, { css } from 'styled-components';

export interface StyledButtonProps extends Omit<MantineButtonProps, 'color'> {
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'transparent'
    | 'apple'
    | 'google';
  border: 'default' | 'right' | 'left';
  size: 'sm' | 'md' | 'lg';
}

const sizeModifier = {
  sm: css`
    min-width: 86px;
    min-height: 36px;
    font-size: 12px;
    line-height: 15px;
  `,
  md: css`
    min-width: 89px;
    min-height: 48px;
    padding: 15px 25px;
    font-size: 14px;
    font-weight: 700;
  `,
  lg: css`
    min-width: 111px;
    min-height: 53px;
    padding: 13px 26px;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  `,
};

const borderVariantModifier = {
  left: css`
    border-radius: 0px 4px 4px 0px;
    border-left: 1px solid ${({ theme }) => theme.colors.purple950};
    border-right: 1px solid ${({ theme }) => theme.colors.purple900};
  `,
  right: css`
    border-radius: 4px 0px 0px 4px;
    border-right: 1px solid ${({ theme }) => theme.colors.purple950};
    border-left: 1px solid ${({ theme }) => theme.colors.purple900};
  `,
  default: css`
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.purple900};
  `,
};

const typeModifier = {
  primary: css`
    background: ${({ theme }) => theme.colors.purple900};
    color: ${({ theme }) => theme.colors.white};
  `,
  secondary: css`
    border-top: 1px solid ${({ theme }) => theme.colors.purple900};
    border-bottom: 1px solid ${({ theme }) => theme.colors.purple900};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.purple900};
  `,
  tertiary: css`
    background: ${({ theme }) => theme.colors.pink500};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  `,
  transparent: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.white100};
    border: 1px solid ${({ theme }) => theme.colors.white100};
  `,
  apple: css`
    background: ${({ theme }) => theme.colors.black700};
    color: ${({ theme }) => theme.colors.white100};
    border: 1px solid ${({ theme }) => theme.colors.white100};
  `,
  google: css`
    background: ${({ theme }) => theme.colors.lighBlue500};
    color: ${({ theme }) => theme.colors.white100};
    border: 1px solid ${({ theme }) => theme.colors.white100};
  `,
};

const StyledButton = styled(ButtonComponent)<StyledButtonProps>`
  font-family: 'Montserrat';
  ${({ border = 'left' }) => borderVariantModifier[border]}
  ${({ variant = 'primary' }) => typeModifier[variant]}
  ${({ size = 'lg' }) => sizeModifier[size]}
  width: ${(props) => (props.w ? props.w : undefined)};
  height: ${(props) => (props.h ? props.h : undefined)};

  &:hover {
    transition: 0.3s;
    opacity: 0.9;
  }
`;

export const Button = createPolymorphicComponent<'button', StyledButtonProps>(
  StyledButton,
);
