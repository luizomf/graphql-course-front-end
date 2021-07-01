import { Delete, Edit } from '@styled-icons/material-outlined';
import { DangerousHtml } from 'components/DangerousHtml';
import { DefaultError } from 'components/DefaultError';
import { FormButton } from 'components/FormButton';
import { Loading } from 'components/Loading';
import P from 'prop-types';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { dateFormatter } from 'utils/date-formatter';
import { DefaultContainer } from '../DefaultContainer';
import { UserPropTypes } from './prop-types';
import * as Styled from './styles';

const addLineBreaks = (text) => {
  return text.replace(/\n/g, '<br />');
};

const fakeCb = () => false;

export const Post = ({
  id,
  title,
  body,
  user,
  // comments = [],
  createdAt,
  loggedUserId = '',
  loading = false,
  error = undefined,
  handleDelete = fakeCb,
  handleEdit = fakeCb,
  numberOfComments = 0,
}) => {
  const ref = useRef();

  if (loading) return <Loading loading={loading} />;
  if (error) return <DefaultError error={error} />;

  return (
    <DefaultContainer>
      <Styled.Container ref={ref} id={`post-single-${id}`}>
        <Styled.PostHeading>
          <Link to={`/post/${id}`}>{title}</Link>
        </Styled.PostHeading>
        <Styled.PostMeta>
          By<Styled.PostMetaItem>{user.firstName}</Styled.PostMetaItem>at
          <Styled.PostMetaItem>{dateFormatter(createdAt)}</Styled.PostMetaItem>
          Comments<Styled.PostMetaItem>{numberOfComments}</Styled.PostMetaItem>
        </Styled.PostMeta>
        <Styled.PostContent>
          <DangerousHtml html={addLineBreaks(body)} />
        </Styled.PostContent>

        {user.id === loggedUserId && (
          <Styled.PostTools>
            <FormButton
              clickedFn={() => handleEdit(`/post/${id}/edit`)}
              buttonSize="small"
              icon={<Edit />}
              iconOnly
              outlined
            />
            <FormButton
              buttonSize="small"
              icon={<Delete />}
              bgColor="secondary"
              clickedFn={handleDelete}
              iconOnly
              outlined
            />
          </Styled.PostTools>
        )}
      </Styled.Container>
    </DefaultContainer>
  );
};

Post.propTypes = {
  id: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
  user: P.shape(UserPropTypes.propTypes),
  // comments: P.arrayOf(P.shape(CommentPropTypes.propTypes)),
  createdAt: P.string.isRequired,
  loggedUserId: P.string,
  loading: P.bool,
  error: P.object,
  handleDelete: P.func,
  handleEdit: P.func,
  numberOfComments: P.number,
};
