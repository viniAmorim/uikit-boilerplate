import React from 'react';

import { render } from '~/test/utils';

import Divider from './Divider';

describe('Divider', () => {
  it('should render correctly', () => {
    const { container } = render(<Divider />);
    const divider = container.firstChild as HTMLElement;

    expect(divider.nodeName).toBe('DIV');
    expect(divider).toBeInTheDocument();
    expect(divider).toMatchSnapshot();
  });

  it('should render a vertical divider when orientation is set to vertical', () => {
    const { getByTestId } = render(
      <Divider data-testid="divider" orientation="vertical" />,
    );
    const divider = getByTestId('divider');

    expect(divider).toHaveAttribute('orientation', 'vertical');
  });

  it('should apply green color when color prop is set to green', () => {
    const { getByTestId } = render(
      <Divider data-testid="divider" color="green" />,
    );
    const divider = getByTestId('divider');

    expect(divider).toHaveAttribute('color', 'green');
  });
});
