import React from 'react';

import * as Styled from './styles';

export interface StepsProps {
  stepOne?: boolean;
  stepTwo?: boolean;
  stepThree?: boolean;
  titleOne: string;
  titleTwo: string;
  titleThree: string;
}

const Steps = ({
  stepOne,
  stepTwo,
  stepThree,
  titleOne,
  titleTwo,
  titleThree,
}: StepsProps) => {
  return (
    <Styled.Container>
      <Styled.Box>
        <Styled.Title>{titleOne}</Styled.Title>
        <Styled.Dot variant={stepOne ? 'active' : 'default'} />
      </Styled.Box>

      <Styled.BarBox>
        <Styled.Bar />
      </Styled.BarBox>

      <Styled.Box>
        <Styled.Title>{titleTwo}</Styled.Title>
        <Styled.Dot variant={stepTwo ? 'active' : 'default'} />
      </Styled.Box>

      <Styled.BarBox>
        <Styled.Bar />
      </Styled.BarBox>

      <Styled.Box>
        <Styled.Title>{titleThree}</Styled.Title>
        <Styled.Dot variant={stepThree ? 'active' : 'default'} />
      </Styled.Box>
    </Styled.Container>
  );
};

export default Steps;
