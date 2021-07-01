import { Post } from 'components/Post';
import { Comment } from 'components/Comment';
import { DefaultContainer } from 'components/DefaultContainer';
import { useHistory } from 'react-router-dom';
import { Edit } from '@styled-icons/material-outlined';
import { FormButton } from 'components/FormButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ConfirmButton } from 'components/ConfirmButton';
import { CommentForm } from 'components/CommentForm';

// MOCKED DATA
import GET_POSTS_MOCK from 'mock/posts';
import { Helmet } from 'react-helmet';
const posts = GET_POSTS_MOCK.data.posts;
const post = posts[0];

export const PostDetails = () => {
  const history = useHistory();

  return (
    <>
      <Helmet title="Post Details - GraphQL + Apollo-Client - Otávio Miranda" />

      <Post
        id={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
        createdAt={post.createdAt}
      />

      {/* THIS MAY BE TEMPORARY */}
      <DefaultContainer>
        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>
          <FormButton
            icon={<Edit />}
            clickedFn={() => history.push(`/post/${post.id}/edit`)}
          >
            Edit
          </FormButton>
          <ConfirmButton
            onChoice={(choice) =>
              toast.success(
                `Your choice is: ${choice ? 'DELETE POST' : 'CANCEL'}`,
              )
            }
          >
            Delete
          </ConfirmButton>
        </div>
      </DefaultContainer>
      {/* THIS MAY BE TEMPORARY */}

      {post.comments.map((comment) => {
        return (
          <Comment
            key={`post-details-comment-${comment.id}`}
            comment={comment.comment}
            createdAt={comment.createdAt}
            id={comment.id}
            user={comment.user}
          />
        );
      })}

      <CommentForm
        handleSubmit={(comment) => toast.success(`Your comment is: ${comment}`)}
      />
    </>
  );
};
