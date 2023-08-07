import React from 'react';

import { render } from '~/test/utils';

import { Arrow } from './Arrow';

describe('Arrow', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(<Arrow value={32} />);

    const arrowElement = container.firstChild as HTMLElement;

    expect(getByText('32%')).toBeInTheDocument();
    expect(arrowElement).toBeInTheDocument();
    expect(arrowElement).toMatchSnapshot();
  });
});
