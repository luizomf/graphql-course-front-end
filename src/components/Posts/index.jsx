import { DefaultContainer } from 'components/DefaultContainer';
import P from 'prop-types';
import { Post } from '../Post';
import * as Styled from './styles';

export const Posts = ({ posts = [], userId = '' }) => {
  return (
    <Styled.Container>
      {posts?.map((post) => (
        <DefaultContainer
          key={`posts-post-${post.id}`}
          id={`posts-post-${post.id}`}
        >
          <Post {...{ loggedUserId: userId, ...post }} />
        </DefaultContainer>
      ))}

      {posts?.length <= 0 && (
        <DefaultContainer>
          There are no posts 😥. <br />
          Maybe you could click <b>load more</b> 😎?
        </DefaultContainer>
      )}
    </Styled.Container>
  );
};

Posts.propTypes = {
  posts: P.arrayOf(P.shape(Post.propTypes)),
  userId: P.string,
};
