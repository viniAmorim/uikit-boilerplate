import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<Styled.StyledButtonProps> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = 'primary', border = 'default', size = 'md', ...rest },
  ref,
) {
  return (
    <Styled.Button
      ref={ref}
      variant={variant}
      border={border}
      size={size}
      {...rest}
    >
      {children}
    </Styled.Button>
  );
});

export default Button;
