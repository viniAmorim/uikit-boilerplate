import React, { forwardRef } from 'react';

import { ClipboardList, MapPin, UserCircle } from 'tabler-icons-react';

import { Badge } from '../Badge';
import ProgressBar from '../ProgressBar';
import Text from '../Text';
import { ColorOptions } from '../types';
import * as Styled from './styles';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Partial<Styled.DotProps> {
  title: string;
  city: string;
  clients: number;
  date: string;
  active: boolean;
  actualInvoices: number;
  totalInvoices: number;
  progressBarColor?: ColorOptions;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    notification = false,
    title,
    city,
    clients,
    date,
    active,
    actualInvoices,
    totalInvoices,
    progressBarColor,
    onClick,
    ...rest
  },
  ref,
) {
  return (
    <Styled.Container onClick={onClick} {...rest} ref={ref}>
      <Styled.DotWrapper>
        <Styled.Dot notification={notification} data-testid="notification" />
      </Styled.DotWrapper>
      <Styled.Card>
        <Text
          fontSize="18px"
          fontColor="purple700"
          weight="700"
          lineHeight="28px"
        >
          {title}
        </Text>
        <Styled.IconWrapper>
          <MapPin size={20} strokeWidth={1} color="grey" />
          <Text
            fontSize="14px"
            fontColor="grey500"
            weight="400"
            lineHeight="22px"
          >
            {city}
          </Text>
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <UserCircle size={20} strokeWidth={1} color="grey" />
          <Text
            fontSize="12px"
            fontColor="grey500"
            weight="400"
            lineHeight="19px"
          >
            {clients.toLocaleString('pt-BR')}
          </Text>
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <ClipboardList size={20} strokeWidth={1} color="grey" />
          <Styled.Wrapper>
            <Text
              fontSize="12px"
              fontColor="grey500"
              weight="400"
              lineHeight="19px"
            >
              Validade: {date}
            </Text>
            <Badge badgeColor={active ? 'green' : 'red'}>
              {active ? 'ATIVO' : 'INATIVO'}
            </Badge>
          </Styled.Wrapper>
        </Styled.IconWrapper>
        <ProgressBar
          height={3}
          value={active ? actualInvoices : 0}
          maxValue={totalInvoices}
          foregroundColor={progressBarColor}
        />
        {active ? (
          <Styled.Wrapper>
            <Styled.PercentageWrapper>
              <Text
                fontSize="10px"
                fontColor="grey500"
                weight="700"
                lineHeight="15px"
              >
                {actualInvoices.toLocaleString('pt-BR')}
              </Text>
              <Text
                fontSize="10px"
                fontColor="grey500"
                weight="700"
                lineHeight="15px"
              >
                ({Math.round((actualInvoices / totalInvoices) * 100)}%)
              </Text>
            </Styled.PercentageWrapper>
            <Text
              fontSize="10px"
              fontColor="grey500"
              weight="700"
              lineHeight="15px"
            >
              {totalInvoices.toLocaleString('pt-BR')}
            </Text>
          </Styled.Wrapper>
        ) : (
          <Styled.NoFranchiseWrapper>
            <Text
              fontSize="10px"
              fontColor="grey500"
              weight="700"
              lineHeight="15px"
            >
              Nenhuma franquia contrada
            </Text>
          </Styled.NoFranchiseWrapper>
        )}
      </Styled.Card>
    </Styled.Container>
  );
});

export default Card;
