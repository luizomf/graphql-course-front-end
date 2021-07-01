import * as Styled from './styles';
import { Send } from '@styled-icons/material-outlined';
import { DefaultContainer } from 'components/DefaultContainer';
import { FormButton } from 'components/FormButton';
import { FormTextArea } from 'components/FormTextArea';
import P from 'prop-types';
import { useState } from 'react';

export const CommentForm = ({ handleSubmit, buttonDisabled = false }) => {
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (handleSubmit) {
      handleSubmit(comment);
    }
  };

  return (
    <Styled.Container>
      <DefaultContainer>
        <h3>Create a comment</h3>
        <Styled.Form onSubmit={onSubmit}>
          <FormTextArea
            label="Comment"
            id="commentBody"
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
  handleSubmit: P.func,
  buttonDisabled: P.bool,
};
