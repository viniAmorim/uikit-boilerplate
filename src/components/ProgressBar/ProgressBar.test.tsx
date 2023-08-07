import React from 'react';

import snapshotDiff from 'snapshot-diff';

import { render } from '~/test/utils';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<ProgressBar value={50} maxValue={100} />);
    const container = getByTestId('progress-bar-container');
    const progress = getByTestId('progress-bar-progress');

    expect(container).toBeInTheDocument();
    expect(progress).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    expect(progress).toMatchSnapshot();
  });

  it('should updates progress', () => {
    const { rerender, asFragment } = render(
      <ProgressBar value={0} maxValue={100} />,
    );

    const initial = asFragment();

    rerender(<ProgressBar value={50} maxValue={100} />);

    const half = asFragment();

    expect(snapshotDiff(initial, half)).toMatchSnapshot();
  });

  it('should render custom props', () => {
    const { rerender, asFragment } = render(
      <ProgressBar value={50} maxValue={100} />,
    );

    const normal = asFragment();

    rerender(
      <ProgressBar
        value={50}
        maxValue={100}
        foregroundColor="black600"
        backgroundColor="pink400"
      />,
    );

    const custom = asFragment();

    expect(snapshotDiff(normal, custom)).toMatchSnapshot();
  });
});
