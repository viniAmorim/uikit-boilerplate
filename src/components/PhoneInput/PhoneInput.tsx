import React from 'react';
import PhoneInputComponent, { PhoneInputProps } from 'react-phone-input-2';

import * as Styled from './styles';
import 'react-phone-input-2/lib/style.css';

export interface IPhoneInputProps extends Partial<PhoneInputProps> {
  id?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  isRequired?: boolean;
}

const PhoneInput = ({
  id,
  label,
  error,
  placeholder,
  isRequired = false,
  ...rest
}: IPhoneInputProps) => {
  return (
    <Styled.Wrapper id={id} hasError={!!error}>
      <Styled.RequiredWrapper>
        <Styled.Label>{label}</Styled.Label>
        {isRequired ? <Styled.Required>*</Styled.Required> : null}
      </Styled.RequiredWrapper>
      <PhoneInputComponent placeholder={placeholder} {...rest} />
      <Styled.Error>{error}</Styled.Error>
    </Styled.Wrapper>
  );
};

export default PhoneInput;
