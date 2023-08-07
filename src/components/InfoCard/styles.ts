import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  min-width: 265px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 19px;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  box-shadow: 0px 7px 7px -5px rgba(0, 0, 0, 0.04),
    0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05);
  word-wrap: break-word;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;
