import { Footer, LoginHeader, Input } from '@/presentation/components';
import { FormStatus } from '@/presentation/components/form-status/form-status';
import Styles from './login-styles.scss';
import Context from '@/presentation/contexts/form/form-context';
import { useState } from 'react';

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

export const Login = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: '',
  });

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <Context.Provider value={state}>
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
