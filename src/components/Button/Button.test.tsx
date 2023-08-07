import React from 'react';

import snapshotDiff from 'snapshot-diff';

import { act, fireEvent, render } from '~/test/utils';

import { Button } from '..';

describe('Button', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Button>Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/^Button$/);
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toBeEnabled();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a primary button', () => {
    const { getByRole } = render(<Button variant="primary">Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a secondary button', () => {
    const { getByRole } = render(<Button variant="secondary">Button</Button>);

    const buttonElement = getByRole('button');

    expect(getByRole('button')).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a button with border left variant', () => {
    const { getByRole } = render(<Button border="left">Button</Button>);

    const buttonElement = getByRole('button');

    expect(getByRole('button')).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a button with border right variant', () => {
    const { getByRole } = render(<Button border="right">Button</Button>);

    const buttonElement = getByRole('button');

    expect(getByRole('button')).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a button with different sizes', () => {
    const { getByRole } = render(<Button size="lg">Button</Button>);

    const buttonElement = getByRole('button');

    expect(getByRole('button')).toBeInTheDocument();

    expect(buttonElement).toMatchSnapshot();
  });

  it('should render a submit button', () => {
    const { getByRole } = render(<Button type="submit">Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');

    expect(buttonElement).toMatchSnapshot();
  });

  it('can be disabled', () => {
    const { rerender, asFragment, getByRole } = render(<Button>Button</Button>);

    const enabled = asFragment();

    rerender(<Button disabled>Button</Button>);

    const disabled = asFragment();

    expect(getByRole('button')).toBeDisabled();

    expect(disabled).toMatchSnapshot();
    expect(snapshotDiff(enabled, disabled)).toMatchSnapshot();
  });

  it('can be loading', () => {
    const { rerender, asFragment } = render(<Button>Button</Button>);

    const enabled = asFragment();

    rerender(<Button loading>Button</Button>);

    const loading = asFragment();

    expect(loading).toMatchSnapshot();
    expect(snapshotDiff(enabled, loading)).toMatchSnapshot();
  });

  it('can have onClick', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(<Button onClick={handleClick}>Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can have focus', () => {
    const { getByRole } = render(<Button>Button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(document.body, { key: 'TAB' });
      buttonElement.focus();
    });

    expect(buttonElement).toHaveFocus();

    expect(buttonElement).toMatchSnapshot();
  });
});
