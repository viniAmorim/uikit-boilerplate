import React from 'react';

import * as Styled from './styles';

export type DividerProps = Styled.DividerProps;

const Divider = ({
  color = 'grey',
  w = '100%',
  h = '22px',
  orientation = 'horizontal',
  ...rest
}: DividerProps) => {
  return (
    <Styled.Divider
      color={color}
      w={orientation === 'vertical' ? '1px' : w}
      h={orientation === 'horizontal' ? '1px' : h}
      orientation={orientation}
      {...rest}
    />
  );
};

export default Divider;
