import { render } from '@testing-library/react';
import { Login } from './login';

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { getByTestId, getByRole } = render(<Login />);
    const errorWrap = getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);

    const button = getByRole('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });
});
