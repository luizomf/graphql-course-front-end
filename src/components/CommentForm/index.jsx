import * as Styled from './styles';
import { Send } from '@styled-icons/material-outlined';
import { DefaultContainer } from 'components/DefaultContainer';
import { FormButton } from 'components/FormButton';
import { FormTextArea } from 'components/FormTextArea';
import { Loading } from 'components/Loading';
import P from 'prop-types';

export const CommentForm = ({
  loading = false,
  handleSubmit,
  comment = '',
  setComment,
  buttonDisabled = false,
}) => {
  return (
    <Styled.Container>
      <Loading loading={loading} />
      <DefaultContainer>
        <h3>Create a comment</h3>
        <Styled.Form onSubmit={handleSubmit}>
          <FormTextArea
            label="Comment"
            id="commentBody"
            textValue={comment}
            changeFn={(v) => setComment(v)}
          />
          <FormButton type="submit" icon={<Send />} disabled={buttonDisabled}>
            Send comment
          </FormButton>
        </Styled.Form>
      </DefaultContainer>
    </Styled.Container>
  );
};

CommentForm.propTypes = {
  postId: P.string,
  loading: P.bool,
  handleSubmit: P.func,
  comment: P.string,
  setComment: P.func,
  buttonDisabled: P.bool,
};
