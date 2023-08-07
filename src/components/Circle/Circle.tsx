/* eslint-disable no-nested-ternary */
import React, { forwardRef } from 'react';

import { Check, Reload, X } from 'tabler-icons-react';

import * as Styled from './styles';

export interface CircleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Partial<Styled.StyledCircleProps> {
  type: 'success' | 'awaiting' | 'error';
}

const Icon = ({ type }) => {
  switch (type) {
    case 'success':
      return <Check size={20} strokeWidth={2} color="#fff" />;
    case 'awaiting':
      return <Reload size={20} strokeWidth={2} color="#fff" />;
    default:
      return <X size={20} strokeWidth={2} color="#fff" />;
  }
};

export const Circle = forwardRef<HTMLDivElement, CircleProps>(function Circle(
  { type = 'success', ...rest },
  ref,
) {
  const getColor = (color: string): Styled.StyledCircleProps['circleColor'] => {
    switch (color) {
      case 'success':
        return 'green';
      case 'awaiting':
        return 'yellow';
      default:
        return 'red';
    }
  };

  return (
    <Styled.Circle ref={ref} circleColor={getColor(type)} {...rest}>
      <Icon type={type} />
    </Styled.Circle>
  );
});

export default Circle;
