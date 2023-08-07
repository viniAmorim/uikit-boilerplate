import styled from 'styled-components';

export const FilePicker = styled.label`
  border: 1px solid ${({ theme }) => theme.colors.pink500};
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.pink500};
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pink500};
    color: ${({ theme }) => theme.colors.white100};
  }

  input[type='file'] {
    display: none;
  }
`;
