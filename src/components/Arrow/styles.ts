import styled from 'styled-components';

export const ArrowContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ArrowText = styled.span`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.white100};
`;

export const Block = styled.div`
  width: 42px;
  height: 28px;
  padding: 6px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px -10px;

  background: ${({ theme }) => theme.colors.purple700};
`;

export const Arrow = styled.div`
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;

  border-left: 30px solid ${({ theme }) => theme.colors.purple700};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;
