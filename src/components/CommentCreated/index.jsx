import { notificationsVarManager } from 'graphql/reactive-vars/local-storage';
import P from 'prop-types';

const CreatedCommentSubscription = ({ _enableNotifications, _authData }) => {
  // SUBSCRIPTION
  return null;
};

export const CommentCreated = ({ authData }) => {
  const { enable: enableNotifications = false } =
    notificationsVarManager.useHook();

  if (enableNotifications) {
    return (
      <CreatedCommentSubscription
        enableNotifications={enableNotifications}
        authData={authData}
      />
    );
  }

  return null;
};

CommentCreated.propTypes = {
  authData: P.shape({
    userId: P.string,
    userName: P.string,
  }),
};
