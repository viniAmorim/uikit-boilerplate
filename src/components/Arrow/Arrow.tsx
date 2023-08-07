import React, { forwardRef } from 'react';

import * as Styled from './styles';

export interface ArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

export const Arrow = forwardRef<HTMLDivElement, ArrowProps>(function Arrow(
  { value, ...rest },
  ref,
) {
  return (
    <Styled.ArrowContainer ref={ref} {...rest}>
      <Styled.Block>
        <Styled.ArrowText>{value}%</Styled.ArrowText>
      </Styled.Block>
      <Styled.Arrow />
    </Styled.ArrowContainer>
  );
});

export default Arrow;
