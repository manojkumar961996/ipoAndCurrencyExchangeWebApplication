import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginComponent from './LoginComponent';

test('calls handleLogin when LoginComponent button is clicked', () => {
  const handleLoginMock = jest.fn();
  jest.mock('./LoginComponent', () => ({
    __esModule: true,
    default: (props) => <div {...props} handleLogin={handleLoginMock} />,
  }));

  render(<LoginComponent />);
  const loginButton = screen.getByText('LoginComponent');
  fireEvent.click(loginButton);
  expect(handleLoginMock).toHaveBeenCalled();
});
