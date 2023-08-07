import React from 'react';

import { TextInputProps } from '@mantine/core';

import * as Styled from './styles';

const Input = ({ ...rest }: TextInputProps) => {
  return <Styled.Input {...rest} />;
};

export default Input;
