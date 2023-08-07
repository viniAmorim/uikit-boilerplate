import React from 'react';

import { fireEvent, render } from '~/test/utils';

import UserCard from './UserCard';

describe('UserCard', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <UserCard title="Park Shopping" email="vinicius@mail.me" />,
    );

    expect(getByText('Park Shopping')).toBeInTheDocument();
    expect(getByText('vinicius@mail.me')).toBeInTheDocument();
  });

  it('should have onClik', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <UserCard
        data-testid="user-card"
        title="Park Shopping"
        email="vinicius@mail.me"
        onClick={handleClick}
      />,
    );

    const cardElement = getByTestId('user-card');

    expect(cardElement).toBeInTheDocument();

    fireEvent.click(cardElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
