import { CommentPropTypes } from 'components/Post/prop-types';
import P from 'prop-types';
import * as Styled from './styles';

export const CommentNotification = ({ comment }) => {
  return (
    <Styled.ToastNotificationContainer>
      <p>
        <strong>{comment.user.userName}</strong> comentou:
      </p>
      <p>
        {comment.comment.slice(0, 100)} {comment.comment.length > 100 && '...'}
      </p>
      <p>
        <a href={`/post/${comment.postId}?refresh=${Date.now()}`}>ver post</a>
      </p>
    </Styled.ToastNotificationContainer>
  );
};

CommentNotification.propTypes = {
  comment: P.shape(CommentPropTypes.propTypes),
};
