import React from 'react';

import snapshotDiff from 'snapshot-diff';

import { fireEvent, render, waitFor } from '~/test/utils';

import Text from './Text';

describe('Text', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Text>Text</Text>);

    const textElement = getByText('Text');

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(/^Text$/);
    expect(textElement).toMatchSnapshot();
  });

  it('should render different FontColors', () => {
    const { rerender, asFragment } = render(
      <Text fontColor="pink500">Text</Text>,
    );
    const pink = asFragment();

    rerender(<Text fontColor="grey500">Text</Text>);
    const grey = asFragment();

    rerender(<Text fontColor="purple700">Text</Text>);
    const purple = asFragment();

    expect(snapshotDiff(pink, grey)).toMatchSnapshot();
    expect(snapshotDiff(pink, purple)).toMatchSnapshot();
    expect(snapshotDiff(grey, purple)).toMatchSnapshot();
  });

  it('should render different Weights', () => {
    const { rerender, asFragment } = render(<Text weight="300">Text</Text>);
    const first = asFragment();

    rerender(<Text weight="400">Text</Text>);
    const second = asFragment();

    rerender(<Text weight="700">Text</Text>);
    const third = asFragment();

    expect(snapshotDiff(first, second)).toMatchSnapshot();
    expect(snapshotDiff(first, third)).toMatchSnapshot();
    expect(snapshotDiff(second, third)).toMatchSnapshot();
  });

  it('should render different FontSizes', () => {
    const { rerender, asFragment } = render(<Text fontSize="14px">Text</Text>);
    const first = asFragment();

    rerender(<Text fontSize="16px">Text</Text>);
    const second = asFragment();

    rerender(<Text fontSize="24px">Text</Text>);
    const third = asFragment();

    expect(snapshotDiff(first, second)).toMatchSnapshot();
    expect(snapshotDiff(first, third)).toMatchSnapshot();
    expect(snapshotDiff(second, third)).toMatchSnapshot();
  });

  it('should render different LineHeight', () => {
    const { rerender, asFragment } = render(
      <Text lineHeight="24px">Text</Text>,
    );
    const first = asFragment();

    rerender(<Text lineHeight="26px">Text</Text>);
    const second = asFragment();

    rerender(<Text lineHeight="34px">Text</Text>);
    const third = asFragment();

    expect(snapshotDiff(first, second)).toMatchSnapshot();
    expect(snapshotDiff(first, third)).toMatchSnapshot();
    expect(snapshotDiff(second, third)).toMatchSnapshot();
  });

  it('should have onClick', async () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Text onClick={handleClick}>Text</Text>);

    const textElement = getByText('Text');

    fireEvent.click(textElement);

    await waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalled();
      expect(textElement).toHaveStyle('cursor: pointer');
    });
  });
});
