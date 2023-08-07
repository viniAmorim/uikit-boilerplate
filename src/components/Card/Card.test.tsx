import React from 'react';

import { render } from '~/test/utils';

import Card from './Card';

describe('Card', () => {
  it('should render correctly and be active', () => {
    const { getByText } = render(
      <Card
        notification={false}
        title="Park Shopping"
        city="DF / Brasilia"
        clients={32432}
        date="12/12/12"
        active
        actualInvoices={123212}
        totalInvoices={200000}
      />,
    );

    expect(getByText('ATIVO')).toBeInTheDocument();
    expect(getByText('Park Shopping')).toBeInTheDocument();
    expect(getByText('DF / Brasilia')).toBeInTheDocument();
    expect(getByText('Validade: 12/12/12')).toBeInTheDocument();
  });

  it('should render no franchise text and be inactive', () => {
    const { getByText } = render(
      <Card
        notification={false}
        title="Park Shopping"
        city="DF / Brasilia"
        clients={32432}
        date="12/12/12"
        active={false}
        actualInvoices={123212}
        totalInvoices={200000}
      />,
    );

    expect(getByText('INATIVO')).toBeInTheDocument();
    expect(getByText('Nenhuma franquia contrada')).toBeInTheDocument();
  });

  it('should have notification', () => {
    const { getByTestId } = render(
      <Card
        notification
        title="Park Shopping"
        city="DF / Brasilia"
        clients={32432}
        date="12/12/12"
        active={false}
        actualInvoices={123212}
        totalInvoices={200000}
      />,
    );

    expect(getByTestId('notification')).toBeInTheDocument();
  });
});
