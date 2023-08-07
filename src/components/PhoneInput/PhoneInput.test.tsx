import React from 'react';

import { act, render } from '~/test/utils';

import PhoneInput from './PhoneInput';

describe('PhoneInput', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText } = render(
      <PhoneInput placeholder="Enter your phone number" />,
    );

    const inputElement = getByPlaceholderText('Enter your phone number');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute(
      'placeholder',
      'Enter your phone number',
    );
  });

  it('should handle focus', () => {
    const handleFocus = jest.fn();

    const { getByPlaceholderText } = render(
      <PhoneInput
        placeholder="Enter your phone number"
        onFocus={handleFocus}
      />,
    );

    const inputElement = getByPlaceholderText('Enter your phone number');

    act(() => {
      inputElement.focus();
    });

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('should display error', () => {
    const errorText = 'Invalid phone number';
    const { getByText } = render(
      <PhoneInput placeholder="Enter your phone number" error={errorText} />,
    );

    const errorElement = getByText(errorText);
    expect(errorElement).toBeInTheDocument();
  });

  it('should be disabled', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText, rerender } = render(
      <PhoneInput
        placeholder="Enter your phone number"
        onChange={handleChange}
      />,
    );

    const inputElement = getByPlaceholderText('Enter your phone number');
    expect(inputElement).not.toBeDisabled();

    rerender(
      <PhoneInput
        placeholder="Enter your phone number"
        onChange={handleChange}
        disabled
      />,
    );

    expect(inputElement).toBeDisabled();
  });

  it('should handle blur', () => {
    const handleBlur = jest.fn();

    const { getByPlaceholderText } = render(
      <PhoneInput placeholder="Enter your phone number" onBlur={handleBlur} />,
    );

    const inputElement = getByPlaceholderText('Enter your phone number');

    act(() => {
      inputElement.focus();
      inputElement.blur();
    });

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
