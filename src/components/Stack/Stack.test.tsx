import React from 'react';

import { render } from '@testing-library/react';

import Stack from './Stack';

describe('Stack', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Stack>
        <div>1</div>
        <div>2</div>
      </Stack>,
    );

    const stack = container.firstChild;

    expect(stack).toBeInTheDocument();
    expect(stack).toMatchSnapshot();
    expect(stack).toHaveStyle(`
    display: flex;
    flex-direction: column;
  `);
  });
  it('should render children with correct flexbox properties', () => {
    const { container } = render(
      <Stack align="flex-start" justify="flex-start" spacing={3}>
        <div>1</div>
        <div>2</div>
      </Stack>,
    );
    const stack = container.firstChild;
    expect(stack).toHaveStyle(`
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.1875rem;
    `);
  });
});
