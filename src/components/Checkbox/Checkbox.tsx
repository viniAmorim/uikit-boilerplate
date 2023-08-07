import React from 'react';

import { CheckboxProps } from '@mantine/core';

import * as Styled from './styles';

export interface ICheckboxProps
  extends CheckboxProps,
    Partial<Styled.StyledCheckboxProps> {}

const Checkbox = function Checkbox({
  background = 'purple900',
  ...rest
}: ICheckboxProps) {
  return <Styled.Checkbox background={background} {...rest} />;
};

export default Checkbox;
