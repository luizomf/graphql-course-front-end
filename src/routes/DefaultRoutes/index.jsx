import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from 'routes/PrivateRoute';
import { App } from 'templates/App';
import { Login } from 'templates/Login';
import { Page404 } from 'templates/Page404';
import { PostEditor } from 'templates/PostEditor';
import { PostTemplate } from 'templates/PostTemplate';
import { Register } from 'templates/Register';

export const DefaultRoutes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <PrivateRoute path="/" exact>
        <App postOffSet={null} />
      </PrivateRoute>
      <PrivateRoute path="/post/create" exact>
        <PostEditor />
      </PrivateRoute>
      <PrivateRoute path="/post/:id/edit" exact>
        <PostEditor />
      </PrivateRoute>
      <PrivateRoute path="/post/:id" exact>
        <PostTemplate />
      </PrivateRoute>
      <Route component={Page404} />
    </Switch>
  );
};
