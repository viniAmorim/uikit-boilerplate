import styled, { css } from 'styled-components';

export type DotProps = {
  notification: boolean;
};

export const Container = styled.div`
  min-width: 265px;
  min-height: 200px;
  display: flex;
  flex-direction: column;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;

export const DotWrapper = styled.div`
  width: 103%;
  height: 8px;
  display: flex;
  justify-content: end;
`;

export const Dot = styled.div<DotProps>`
  width: 15px;
  height: 15px;
  background: ${(props) =>
    props.notification ? ({ theme }) => theme.colors.red500 : undefined};
  border-radius: 50%;
  position: absolute;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 19px;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  box-shadow: 0px 7px 7px -5px rgba(0, 0, 0, 0.04),
    0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05);
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PercentageWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 8px;
`;

export const NoFranchiseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
