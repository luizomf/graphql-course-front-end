import * as Styled from './styles';
import { DefaultContainer } from 'components/DefaultContainer';
import { FormInput } from 'components/FormInput';
import { FormTextArea } from 'components/FormTextArea';
import { FormErrorMessage } from 'components/FormErrorMessage';
import { FormButton } from 'components/FormButton';
import { Link } from 'react-router-dom';
import { Save } from '@styled-icons/material-outlined';
import P from 'prop-types';
import { Post } from 'components/Post';

export const PostForm = ({
  post,
  formError,
  somethingLoading,
  handleSubmitCb,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form.postTitle.value;
    const postBody = form.postBody.value;

    if (handleSubmitCb) {
      handleSubmitCb({ title: postTitle, body: postBody });
    }
  };

  return (
    <DefaultContainer>
      <Styled.Form onSubmit={handleSubmit}>
        <h1>{post?.id ? `Editing post` : 'Create a new post'}</h1>

        <FormInput label="Title" id="postTitle" textValue={post?.title} />

        <FormTextArea label="Post body" id="postBody" textValue={post?.body} />

        {!!formError && <FormErrorMessage>{formError}</FormErrorMessage>}

        <Styled.ButtonsContainer>
          <FormButton type="submit" icon={<Save />} disabled={somethingLoading}>
            Save
          </FormButton>
          {post?.id && <Link to={`/post/${post.id}`}>Ver post</Link>}
        </Styled.ButtonsContainer>
      </Styled.Form>
    </DefaultContainer>
  );
};

PostForm.propTypes = {
  post: P.shape(Post.propTypes),
  formError: P.string,
  somethingLoading: P.bool,
  handleSubmitCb: P.func,
};
