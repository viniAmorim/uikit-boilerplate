import { Title as TitleComponent } from '@mantine/core';
import styled from 'styled-components';

export const Title = styled(TitleComponent)`
  color: ${({ theme }) => theme.colors.purple900};
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 700;
  line-height: 42px;
`;
