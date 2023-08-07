import React from 'react';

import { render } from '~/test/utils';

import InfoCard from './InfoCard';

describe('InfoCard', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(
      <InfoCard title="Park Shopping" info={121212} />,
    );

    const cardElement = container.firstChild as HTMLElement;

    expect(getByText('Park Shopping')).toBeInTheDocument();
    expect(getByText('121.212')).toBeInTheDocument();
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toMatchSnapshot();
  });
});
