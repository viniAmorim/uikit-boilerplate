import React from 'react';

import { render } from '~/test/utils';

import Title from './Title';

describe('Title', () => {
  it('should render correctly and with the correct styles', () => {
    const { container } = render(<Title>Title</Title>);

    const title = container.firstChild;

    expect(title).toHaveTextContent(/^Title$/);
    expect(title).toBeInTheDocument();
    expect(title).toMatchSnapshot();
    expect(title).toHaveStyle(`
      color: #33245C;
      text-align: center;
      font-weight: 700;
      line-height: 1.3;
  `);
  });
});
