import React from 'react';

import { fireEvent, render } from '~/test/utils';

import FilePicker from '.';

describe('FilePicker', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <FilePicker onFileSelect={jest.fn()} data-testid="filepicker">
        Filepicker
      </FilePicker>,
    );

    const filepickerContainer = getByTestId('filepicker-container');

    expect(filepickerContainer).toBeInTheDocument();
    expect(filepickerContainer).toHaveTextContent(/^Filepicker$/);
    expect(getByTestId('filepicker')).toHaveAttribute('type', 'file');

    expect(filepickerContainer).toMatchSnapshot();
  });

  it('should call onFileSelect when a file is selected', () => {
    const onFileSelectMock = jest.fn();

    const { getByLabelText } = render(
      <FilePicker onFileSelect={onFileSelectMock} accept=".jpg, .png">
        Selecione um arquivo
      </FilePicker>,
    );

    const input = getByLabelText('Selecione um arquivo');

    const file = new File(['boilerplate'], 'teste.jpg', {
      type: 'image/jpeg',
    });

    fireEvent.change(input, { target: { files: [file] } });

    expect(onFileSelectMock).toHaveBeenCalledWith(file);
  });
});
