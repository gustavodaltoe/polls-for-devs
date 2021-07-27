import { Footer, LoginHeader, Input } from '@/presentation/components';
import { FormStatus } from '@/presentation/components/form-status/form-status';
import Styles from './login-styles.scss';
import Context from '@/presentation/contexts/form/form-context';
import { useEffect, useState } from 'react';
import { Validation } from '@/presentation/protocols/validation';

type Props = {
  validation: Validation;
};

export const Login = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: '',
  });

  useEffect(() => {
    validation.validate({ email: state.email });
  }, [validation, state.email]);

  useEffect(() => {
    validation.validate({ password: state.password });
  }, [validation, state.password]);

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <button className={Styles.submit} disabled type="submit">
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
