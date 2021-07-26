import { Login } from '@/presentation/pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
