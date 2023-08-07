import { DateInput as DateInputComponent } from '@mantine/dates';
import styled from 'styled-components';

export const DateInput = styled(DateInputComponent)`
  & .mantine-DateInput-input {
    border-radius: 4px;
    height: 47px;
    width: 100%;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.purple700};
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.purple700};
    }
  }
  & .mantine-DateInput-label {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.purple700};
  }
`;
