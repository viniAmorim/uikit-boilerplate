import styled, { css } from 'styled-components';

import { ColorOptions } from '../types';

export type StyledParagraphProps = {
  weight: string;
  fontSize: string;
  fontColor: ColorOptions;
  lineHeight: string;
};

export const Paragraph = styled.div<StyledParagraphProps>`
  font-family: 'Montserrat';
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight};
  color: ${({ theme, fontColor = 'black700' }) => theme.colors[fontColor]};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;
