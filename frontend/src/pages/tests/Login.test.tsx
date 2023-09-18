/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Login';
import '@testing-library/jest-dom';
import { AuthContextProvider } from '../../context/AuthContext';
import { HashRouter } from 'react-router-dom';

test('renders Email label in Login component', () => {
  const { getByLabelText } = render(
    <HashRouter>
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </HashRouter>
  );

  // Check if the "Email:" label is present
  const emailLabel = getByLabelText('Email:');
  expect(emailLabel).toBeInTheDocument();
});
