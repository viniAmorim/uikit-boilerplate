import React from 'react';

import snapshotDiff from 'snapshot-diff';

import { render } from '~/test/utils';

import Steps from './Steps';

describe('Steps', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Steps titleOne="test" titleTwo="test" titleThree="test" />,
    );
    const steps = container.firstChild as HTMLElement;

    expect(steps).toBeInTheDocument();
    expect(steps).toMatchSnapshot();
  });

  it('can all balls be active', () => {
    const { rerender, asFragment } = render(
      <Steps titleOne="test" titleTwo="test" titleThree="test" />,
    );
    const initial = asFragment();

    rerender(
      <Steps stepOne titleOne="test" titleTwo="test" titleThree="test" />,
    );
    const first = asFragment();

    rerender(
      <Steps
        stepOne
        stepTwo
        titleOne="test"
        titleTwo="test"
        titleThree="test"
      />,
    );
    const second = asFragment();

    rerender(
      <Steps
        stepOne
        stepTwo
        stepThree
        titleOne="test"
        titleTwo="test"
        titleThree="test"
      />,
    );
    const third = asFragment();

    expect(snapshotDiff(initial, first)).toMatchSnapshot();
    expect(snapshotDiff(initial, second)).toMatchSnapshot();
    expect(snapshotDiff(initial, third)).toMatchSnapshot();

    expect(snapshotDiff(first, second)).toMatchSnapshot();
    expect(snapshotDiff(first, third)).toMatchSnapshot();

    expect(snapshotDiff(second, third)).toMatchSnapshot();
  });
});
