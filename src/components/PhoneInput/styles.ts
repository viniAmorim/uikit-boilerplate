import styled, { css } from 'styled-components';

export type WrapperProps = {
  hasError: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  & .react-tel-input input {
    border-radius: 4px;
    height: 47px;
    width: 100%;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.purple700};
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.purple700};
    }

    ${({ hasError }) =>
      hasError &&
      css`
        border: 1px solid #fa5252;
        color: #fa5252;

        &::placeholder {
          color: #fa5252;
          opacity: 1;
        }
      `}
  }
`;

export const RequiredWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Required = styled.p`
  margin: 0;
  font-family: 'Helvetica';
  color: #fa5252;
`;

export const Label = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.purple700};
  margin-top: 0;
  margin-bottom: 8px;
`;

export const Error = styled.p`
  font-family: 'Helvetica';
  font-size: 12px;
  line-height: 1.2;
  color: #fa5252;
  margin-top: 4px;
  margin-bottom: 0;
`;
