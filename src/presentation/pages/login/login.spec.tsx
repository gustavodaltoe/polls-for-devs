import { render } from '@testing-library/react';
import { Login } from './login';

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { getByTestId, getByRole } = render(<Login />);
    const errorWrap = getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);

    const button = getByRole('button');
    expect(button).toHaveProperty('disabled');

    const emailStatus = getByTestId('email-status');
    expect(emailStatus.title).toBe('Campo obrigatório');

    const passwordStatus = getByTestId('password-status');
    expect(passwordStatus.title).toBe('Campo obrigatório');
  });
});
