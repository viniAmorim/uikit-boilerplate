import styled, { css } from 'styled-components';

export type StyledDotProps = {
  variant: 'active' | 'default';
};

const variantModifier = {
  default: css`
    background: ${({ theme }) => theme.colors.grey500};
  `,
  active: css`
    background: ${({ theme }) => theme.colors.pink500};
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  margin-bottom: 40px;
  margin-top: 60px;
  justify-content: center;
  align-items: center;

  @media (min-width: 625px) {
    width: 500px;
  }
`;

export const Title = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;

export const Dot = styled.div<StyledDotProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  ${({ variant = 'active' }) => variantModifier[variant]}
`;

export const Bar = styled.div`
  width: 100%;
  height: 5px;
  background: ${({ theme }) => theme.colors.grey100};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
`;

export const BarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: flex-end;
  height: 64px;
  width: 100%;
`;
