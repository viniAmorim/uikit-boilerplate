import React, { InputHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface FilePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  onFileSelect: (file: File | null) => void;
  accept?: string | undefined;
  children: ReactNode;
}

const FilePicker = ({
  onFileSelect,
  accept,
  children,
  ...rest
}: FilePickerProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <Styled.FilePicker data-testid="filepicker-container">
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        {...rest}
      />
      {children}
    </Styled.FilePicker>
  );
};

export default FilePicker;
