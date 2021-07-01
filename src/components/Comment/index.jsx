import { DefaultContainer } from 'components/DefaultContainer';
import { UserPropTypes } from 'components/Post/prop-types';
import P from 'prop-types';
import { dateFormatter } from 'utils/date-formatter';
import * as Styled from './styles';

export const Comment = ({ comment, user, createdAt }) => {
  return (
    <Styled.Container>
      <DefaultContainer>
        <Styled.CommentMeta>
          <Styled.CommentMetaItem>{user.firstName}</Styled.CommentMetaItem>
          <span>said:</span>
        </Styled.CommentMeta>
        <Styled.CommentBody>{comment}</Styled.CommentBody>
        <Styled.CommentMeta>
          <span>At</span>
          <Styled.CommentMetaItem>
            {dateFormatter(createdAt)}
          </Styled.CommentMetaItem>
        </Styled.CommentMeta>
      </DefaultContainer>
    </Styled.Container>
  );
};

Comment.propTypes = {
  id: P.string,
  comment: P.string,
  user: P.shape(UserPropTypes),
  createdAt: P.string,
};
