import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import PageHeader from '.';

describe('<PageHeader />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { container } = render(
      <Router history={history}>
        <PageHeader />
      </Router>,
    );

    const label = screen.getByText('to do list');
    expect(label).toBeInTheDocument();
    const goBack = screen.queryByText('Go Back');
    expect(goBack).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders component correctly with /add URL', () => {
    const history = createMemoryHistory();
    history.push('/add');

    render(
      <Router history={history}>
        <PageHeader />
      </Router>,
    );

    const label = screen.getByText('add to do');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('Go Back');
    expect(goBack).toBeInTheDocument();
    expect(goBack.getAttribute('href')).toBe('/');
  });

  it('renders component correctly with /detail/:id URL', () => {
    const history = createMemoryHistory();
    history.push('/detail/1');

    render(
      <Router history={history}>
        <PageHeader />
      </Router>,
    );

    const label = screen.getByText('detail');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('Go Back');
    expect(goBack).toBeInTheDocument();
    expect(goBack.getAttribute('href')).toBe('/');
  });

  it('renders component correctly with Not Found', () => {
    const history = createMemoryHistory();
    history.push('/not_found');

    render(
      <Router history={history}>
        <PageHeader />
      </Router>,
    );

    const label = screen.getByText('error');
    expect(label).toBeInTheDocument();
    const goBack = screen.getByText('Go Back');
    fireEvent.click(goBack);
    const homeLabel = screen.getByText('to do list');
    expect(homeLabel).toBeInTheDocument();
    expect(goBack).not.toBeInTheDocument();
  });
});
