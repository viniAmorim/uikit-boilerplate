import React from 'react';

import userEvent from '@testing-library/user-event';

import { act, render, waitFor } from '~/test/utils';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Checkbox />);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });

  it('should switch the `checked` status', async () => {
    const { getByRole } = render(<Checkbox />);
    const input = getByRole('checkbox');

    expect(input).not.toBeChecked();

    userEvent.click(input);
    await waitFor(() => expect(input).toBeChecked());
  });

  it('should handle the focus and blur states', () => {
    const { getByRole } = render(<Checkbox />);
    const checkbox = getByRole('checkbox');

    expect(checkbox).not.toHaveFocus();

    act(() => {
      checkbox.focus();
    });

    expect(checkbox).toHaveFocus();

    act(() => {
      checkbox.blur();
    });

    expect(checkbox).not.toHaveFocus();
  });

  it('should trigger the `onChange` function', async () => {
    const handleChange = jest.fn();

    const { getByRole } = render(<Checkbox onChange={handleChange} />);

    const input = getByRole('checkbox');

    userEvent.click(input);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  it('can be checked', () => {
    const { getByRole } = render(<Checkbox />);

    const checkbox = getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('can be disabled', () => {
    const { getByRole, rerender } = render(<Checkbox />);

    const checkbox = getByRole('checkbox');

    expect(checkbox).not.toBeDisabled();

    rerender(<Checkbox disabled />);

    expect(checkbox).toBeDisabled();
  });
});
