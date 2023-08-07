import React from 'react';

import { render } from '~/test/utils';

import { Badge } from './Badge';

describe('Badge', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Badge>Badge</Badge>);

    const badgeElement = getByText('Badge');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent(/^Badge$/);

    expect(badgeElement).toMatchSnapshot();
  });

  it('should render a green badge', () => {
    const { getByText } = render(<Badge badgeColor="green">Badge</Badge>);

    const badgeElement = getByText('Badge');

    expect(badgeElement).toBeInTheDocument();

    expect(badgeElement).toMatchSnapshot();
  });

  it('should render a yellow badge', () => {
    const { getByText } = render(<Badge badgeColor="yellow">Badge</Badge>);

    const badgeElement = getByText('Badge');

    expect(badgeElement).toBeInTheDocument();

    expect(badgeElement).toMatchSnapshot();
  });
});
