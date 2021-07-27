import { render } from '@testing-library/react';
import { Login } from './login';

const makeSut = () => {
  const sut = render(<Login />);
  return { sut };
};

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { sut } = makeSut();
    const errorWrap = sut.getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);

    const button = sut.getByRole('button');
    expect(button).toHaveProperty('disabled');

    const emailStatus = sut.getByTestId('email-status');
    expect(emailStatus.title).toBe('Campo obrigatório');

    const passwordStatus = sut.getByTestId('password-status');
    expect(passwordStatus.title).toBe('Campo obrigatório');
  });
});
