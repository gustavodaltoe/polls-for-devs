import { Login } from '@/presentation/pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@/presentation/styles/global.scss';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
