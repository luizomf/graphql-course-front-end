import P from 'prop-types';

export const UserPropTypes = {
  id: P.string.isRequired,
  firstName: P.string.isRequired,
  lastName: P.string.isRequired,
  userName: P.string.isRequired,
  createdAt: P.string,
};

export const CommentPropTypes = {
  id: P.string.isRequired,
  comment: P.string.isRequired,
  user: UserPropTypes,
  createdAt: P.string.isRequired,
};
