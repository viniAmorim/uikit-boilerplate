import React from 'react';

import { SelectProps } from '@mantine/core';

import * as Styled from './styles';

const Select = ({ ...rest }: SelectProps) => {
  return <Styled.Select {...rest} />;
};

export default Select;
