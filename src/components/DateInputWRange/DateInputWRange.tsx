import React from 'react';

import { DatePickerInputProps } from '@mantine/dates';

import * as Styled from './styles';

const DateInputWRange = ({ ...rest }: DatePickerInputProps) => {
  return <Styled.DateInputWRange type="range" {...rest} />;
};

export default DateInputWRange;
