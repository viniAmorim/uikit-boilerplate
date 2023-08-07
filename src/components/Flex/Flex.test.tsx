import React from 'react';

import { render } from '@testing-library/react';

import Flex from './Flex';

describe('Flex', () => {
  it('should render correctly', () => {
    const { container } = render(<Flex />);

    const flex = container.firstChild;

    expect(flex).toBeInTheDocument();
    expect(flex).toMatchSnapshot();
  });
  it('should render children with correct flexbox properties', () => {
    const { container } = render(
      <Flex justify="center" align="center">
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>,
    );
    const flex = container.firstChild;
    expect(flex).toHaveStyle(`
      display: flex;
      justify-content: center;
      align-items: center;
    `);
  });
});
