import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Login'
import '@testing-library/jest-dom'

test('renders Login component', () => {
  const { getByText, getByLabelText } = render(<Login />);
  
  // Check if important elements are present
  const emailInput = getByLabelText('Email:');
  const passwordInput = getByLabelText('Password:');
  const loginButton = getByText('Login');
  
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});
