import React, { forwardRef, ReactNode } from 'react';

import * as Styled from './styles';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    Partial<Styled.StyledBadgeProps> {
  children: ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { children, badgeColor = 'red', ...rest },
  ref,
) {
  return (
    <Styled.Badge ref={ref} badgeColor={badgeColor} {...rest}>
      {children}
    </Styled.Badge>
  );
});

export default Badge;
