import React from 'react';

import { render } from '~/test/utils';

import { Circle } from './Circle';

describe('Circle', () => {
  it('should render correctly', () => {
    const { container } = render(<Circle type="success" />);

    const circleElement = container.firstChild as HTMLElement;

    expect(circleElement).toBeInTheDocument();
    expect(circleElement).toMatchSnapshot();
  });

  it('should render an awaiting circle', () => {
    const { container } = render(<Circle type="awaiting" />);

    const circleElement = container.firstChild as HTMLElement;

    expect(circleElement).toBeInTheDocument();
    expect(circleElement).toMatchSnapshot();
  });

  it('should render an error button', () => {
    const { container } = render(<Circle type="error" />);

    const circleElement = container.firstChild as HTMLElement;

    expect(circleElement).toBeInTheDocument();
    expect(circleElement).toMatchSnapshot();
  });
});
