import React, { forwardRef } from 'react';

import { Mail } from 'tabler-icons-react';

import Text from '../Text';
import * as Styled from './styles';

export interface UserCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  email: string;
  onClick?: () => void;
}

const UserCard = forwardRef<HTMLDivElement, UserCardProps>(function Card(
  { title, email, onClick, ...rest },
  ref,
) {
  return (
    <Styled.Card onClick={onClick} {...rest} ref={ref}>
      <Text
        fontSize="18px"
        fontColor="purple700"
        weight="700"
        lineHeight="28px"
      >
        {title}
      </Text>
      <Styled.IconWrapper>
        <Mail size={20} strokeWidth={2} color="grey" />
        <Text
          fontSize="14px"
          fontColor="grey500"
          weight="400"
          lineHeight="22px"
        >
          {email}
        </Text>
      </Styled.IconWrapper>
    </Styled.Card>
  );
});

export default UserCard;
