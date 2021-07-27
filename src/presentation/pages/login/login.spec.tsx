import { ValidationSpy } from '@/presentation/test';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Login } from './login';
import faker from 'faker';

const makeSut = () => {
  const validationSpy = new ValidationSpy();
  const sut = render(<Login validation={validationSpy} />);

  return { sut, validationSpy };
};

describe('Login Component', () => {
  afterEach(cleanup);

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

  test('Should call validation with correct email', () => {
    const { sut, validationSpy } = makeSut();
    const emailInput = sut.getByTestId('email');
    const email = faker.internet.email();
    fireEvent.input(emailInput, { target: { value: email } });

    expect(validationSpy.fieldName).toBe('email');
    expect(validationSpy.fieldValue).toBe(email);
  });

  test('Should call validation with correct password', () => {
    const { sut, validationSpy } = makeSut();
    const passwordInput = sut.getByTestId('password');
    const password = faker.internet.password();
    fireEvent.input(passwordInput, { target: { value: password } });

    expect(validationSpy.fieldName).toBe('password');
    expect(validationSpy.fieldValue).toBe(password);
  });
});
