import React from 'react';

import { render } from '@testing-library/react';

import Grid from './Grid';

describe('Grid', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Grid>
        <Grid.Col>1</Grid.Col>
        <Grid.Col>2</Grid.Col>
      </Grid>,
    );

    const grid = container.firstChild;

    expect(grid).toBeInTheDocument();
    expect(grid).toMatchSnapshot();
  });
  it('should render children with correct flexbox properties', () => {
    const { container } = render(
      <Grid justify="center" align="center">
        <Grid.Col span={4}>1</Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
      </Grid>,
    );
    const flex = container.firstChild;
    expect(flex).toHaveStyle(`
      display: flex;
      justify-content: center;
      align-items: center;
    `);
  });
});
