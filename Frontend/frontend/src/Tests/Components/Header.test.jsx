import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Header from '../../Components/Header';

test('Header Component Render', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Rendering Test
  const dashboardButton = getByTestId('dashboardButton');
  const booksButton = getByTestId('booksButton');
  const categoriesButton = getByTestId('categoriesButton');
  const requestsButton = getByTestId('requestsButton');
  const usersButton = getByTestId('usersButton');

  expect(dashboardButton).toBeInTheDocument();
  expect(booksButton).toBeInTheDocument();
  expect(categoriesButton).toBeInTheDocument();
  expect(requestsButton).toBeInTheDocument();
  expect(usersButton).toBeInTheDocument();
});

test('Header Component Clickable', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  
    // Clickable Test
    const dashboardButton = getByTestId('dashboardButton');
    const booksButton = getByTestId('booksButton');
    const categoriesButton = getByTestId('categoriesButton');
    const requestsButton = getByTestId('requestsButton');
    const usersButton = getByTestId('usersButton');
  
    // Check if buttons are clickable
    expect(dashboardButton).toBeEnabled();
    expect(booksButton).toBeEnabled();
    expect(categoriesButton).toBeEnabled();
    expect(requestsButton).toBeEnabled();
    expect(usersButton).toBeEnabled();

    // Simulate a click on each button and ensure no error is thrown
    fireEvent.click(dashboardButton);
    fireEvent.click(booksButton);
    fireEvent.click(categoriesButton);
    fireEvent.click(requestsButton);
    fireEvent.click(usersButton);
});