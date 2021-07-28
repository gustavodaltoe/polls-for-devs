import {
  Footer,
  LoginHeader,
  Input,
  FormStatus,
} from '@/presentation/components';
import Styles from './login-styles.scss';
import Context from '@/presentation/contexts/form/form-context';
import { useEffect, useState } from 'react';
import { Validation } from '@/presentation/protocols/validation';
import { Authentication } from '@/domain/usecases';

type Props = {
  validation: Validation;
  authentication: Authentication;
};

export const Login = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: '',
  });

  useEffect(() => {
    setState((state) => ({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
    }));
  }, [validation, state.email, state.password]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState((state) => ({ ...state, isLoading: true }));
    await authentication.auth({ email: state.email, password: state.password });
  };

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <button
            className={Styles.submit}
            disabled={!!state.emailError || !!state.passwordError}
            type="submit"
          >
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />
    </div>
  );
};
