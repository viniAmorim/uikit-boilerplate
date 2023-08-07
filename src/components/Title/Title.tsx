import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface TitleProps extends BaseHTMLAttributes<HTMLTitleElement> {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <Styled.Title>{children}</Styled.Title>;
};

export default Title;
