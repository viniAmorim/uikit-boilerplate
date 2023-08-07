import React, { forwardRef } from 'react';

import * as Styled from './styles';

const ProgressBar = forwardRef<HTMLDivElement, Styled.StyledProgressBarProps>(
  function ProgressBar(
    { value, maxValue, height = 20, backgroundColor, foregroundColor, ...rest },
    ref,
  ) {
    return (
      <Styled.ProgressBarContainer
        data-testid="progress-bar-container"
        height={height}
        backgroundColor={backgroundColor}
        ref={ref}
        {...rest}
      >
        <Styled.Progress
          data-testid="progress-bar-progress"
          value={value}
          maxValue={maxValue}
          foregroundColor={foregroundColor}
        />
      </Styled.ProgressBarContainer>
    );
  },
);

export default ProgressBar;
