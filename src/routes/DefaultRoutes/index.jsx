import { Route, Switch } from 'react-router-dom';
import { Page404 } from 'page-templates/Page404';
import { Home } from 'page-templates/Home';
import { Login } from 'page-templates/Login';
import { Register } from 'page-templates/Register';
import { PostDetails } from 'page-templates/PostDetails';
import { PostEditor } from '../../page-templates/PostEditor';

export const DefaultRoutes = () => {
  return (
    <Switch>
      {/* <PrivateRoute path="/post/:id" exact>
        <PostTemplate />
      </PrivateRoute> */}
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" exact />
      <Route component={Register} path="/register" exact />
      <Route component={PostDetails} path="/post/:id" exact />
      <Route component={PostEditor} path="/post/:id/edit" exact />
      <Route component={Page404} />
    </Switch>
  );
};
