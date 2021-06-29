import P from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

export const PrivateRoute = ({ children = '', component = '', ...rest }) => {
  let { authData = {} } = {
    /* ????? */
  };
  const isLoggedIn = authData && !!authData.userId;

  if (component) {
    throw new Error(
      'You should not use component with PrivateRoute, use children instead.',
    );
  }

  const renderFn = ({ location }) => {
    if (isLoggedIn) return children;

    const redirectConfig = {
      pathname: '/login',
      state: { from: location },
    };

    toast.error('You need to login to access this page');
    return <Redirect to={redirectConfig} />;
  };

  return <Route {...rest} render={renderFn} />;
};

PrivateRoute.propTypes = {
  children: P.node,
  component: P.func,
};
