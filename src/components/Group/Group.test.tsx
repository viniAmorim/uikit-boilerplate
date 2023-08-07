import React from 'react';

import { render } from '@testing-library/react';

import Group from './Group';

describe('Group', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Group>
        <div>1</div>
        <div>2</div>
      </Group>,
    );

    const group = container.firstChild;

    expect(group).toBeInTheDocument();
    expect(group).toMatchSnapshot();
    expect(group).toHaveStyle(`
    display: flex;
    flex-direction: row;
  `);
  });
  it('should render children with correct flexbox properties', () => {
    const { container } = render(
      <Group position="center" align="center" noWrap>
        <div>1</div>
        <div>2</div>
      </Group>,
    );
    const group = container.firstChild;
    expect(group).toHaveStyle(`
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
    `);
  });
});
