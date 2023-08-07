import React from 'react';

import { act, fireEvent, render } from '~/test/utils';

import Input from './Input';

const handleChange = () => jest.fn();

describe('Input', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Input data-testid="input" onChange={handleChange} />,
    );

    const textFieldElement = getByTestId('input');

    expect(textFieldElement).toBeInTheDocument();
    expect(textFieldElement).toHaveAttribute('type');
    expect(textFieldElement).toBeEnabled();
  });

  it('should be disabled', () => {
    const { rerender, getByTestId } = render(
      <Input data-testid="input" onChange={handleChange} />,
    );

    const textFieldElement = getByTestId('input');

    expect(textFieldElement).not.toBeDisabled();

    rerender(<Input disabled data-testid="input" onChange={handleChange} />);

    expect(textFieldElement).toBeDisabled();
  });

  it('can have onFocus', () => {
    const handleFocus = jest.fn();

    const { getByTestId } = render(
      <Input
        data-testid="input"
        onChange={handleChange}
        onFocus={handleFocus}
      />,
    );

    const textFieldElement = getByTestId('input');

    expect(textFieldElement).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(document.body, { key: 'TAB' });
      textFieldElement.focus();
    });

    expect(handleFocus).toHaveBeenCalledTimes(1);
    expect(textFieldElement).toHaveFocus();
  });

  it('can have onBlur', () => {
    const handleBlur = jest.fn();

    const { getByTestId } = render(
      <Input data-testid="input" onChange={handleChange} onBlur={handleBlur} />,
    );

    const textFieldElement = getByTestId('input');

    expect(textFieldElement).not.toHaveFocus();

    act(() => {
      textFieldElement.focus();
    });

    expect(textFieldElement).toHaveFocus();

    act(() => {
      textFieldElement.blur();
    });

    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(textFieldElement).not.toHaveFocus();
  });
});
