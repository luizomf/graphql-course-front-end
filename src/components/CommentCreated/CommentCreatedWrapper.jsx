import { useAuthCheck } from 'graphql/hooks/use-auth-check';
import P from 'prop-types';
import React from 'react';

export const CommentCreatedWrapper = ({ children = '' }) => {
  const { authData = {} } = useAuthCheck();
  if (!authData || !authData.userId) return null;

  const decoratedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...child.props, authData });
    }
    return child;
  });

  return decoratedChildren;
};

CommentCreatedWrapper.propTypes = {
  children: P.node,
};
