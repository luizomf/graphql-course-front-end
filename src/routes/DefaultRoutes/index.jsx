import { Route, Switch } from 'react-router-dom';
import { Page404 } from 'page-templates/Page404';
import { Home } from 'page-templates/Home';

export const DefaultRoutes = () => {
  return (
    <Switch>
      {/* <Route path="/login" component={Login} exact /> */}
      {/* <Route path="/register" component={Register} exact /> */}
      {/* <PrivateRoute path="/" exact>
        <App postOffSet={null} />
      </PrivateRoute> */}
      {/* <PrivateRoute path="/post/create" exact>
        <PostEditor />
      </PrivateRoute> */}
      {/* <PrivateRoute path="/post/:id/edit" exact>
        <PostEditor />
      </PrivateRoute> */}
      {/* <PrivateRoute path="/post/:id" exact>
        <PostTemplate />
      </PrivateRoute> */}
      <Route component={Home} />
      <Route component={Page404} />
    </Switch>
  );
};
