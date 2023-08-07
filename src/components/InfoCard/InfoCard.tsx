import React, { forwardRef } from 'react';

import Text from '../Text';
import * as Styled from './styles';

export interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  info: number;
  onClick?: () => void;
}

const UserCard = forwardRef<HTMLDivElement, InfoCardProps>(function Card(
  { title, info, onClick, ...rest },
  ref,
) {
  return (
    <Styled.Card onClick={onClick} ref={ref} {...rest}>
      <Text fontSize="14px" fontColor="grey500" weight="400" lineHeight="22px">
        {title}
      </Text>
      <Text
        fontSize="40px"
        fontColor="purple900"
        weight="700"
        lineHeight="62px"
      >
        {info.toLocaleString('pt-BR')}
      </Text>
    </Styled.Card>
  );
});

export default UserCard;
