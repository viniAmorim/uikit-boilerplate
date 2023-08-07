import React from 'react';

import { DateInputProps } from '@mantine/dates';

import * as Styled from './styles';

const DateInput = ({ ...rest }: DateInputProps) => {
  return <Styled.DateInput {...rest} />;
};

export default DateInput;
