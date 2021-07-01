import { Cancel, Check, Delete } from '@styled-icons/material-outlined';
import P from 'prop-types';
import { toast } from 'react-toastify';
import { FormButton } from 'components/FormButton';
import * as Styled from './styles';
import { useRef, useState } from 'react';

const ConfirmMessage = ({ title, callback, body }) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Body>{body}</Styled.Body>

      <Styled.ButtonsContainer>
        <FormButton
          icon={<Check />}
          buttonSize="small"
          bgColor="secondary"
          clickedFn={() => callback(true)}
        >
          Confirm
        </FormButton>
        <FormButton
          icon={<Cancel />}
          buttonSize="small"
          clickedFn={() => callback(false)}
        >
          Cancel
        </FormButton>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

ConfirmMessage.propTypes = {
  title: P.string,
  callback: P.func,
  body: P.string,
};

export const ConfirmButton = ({
  children = '',
  title = 'Are you sure?',
  body = 'This action may be permanent!',
  onChoice,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const toastId = useRef(null);

  const handleUserChoice = (choice) => {
    setButtonDisabled(false);
    toast.dismiss(toastId.current);

    if (onChoice) {
      onChoice(choice);
    }
  };

  const handleClick = () => {
    setButtonDisabled(true);
    toastId.current = toast.dark(
      <ConfirmMessage callback={handleUserChoice} title={title} body={body} />,
      {
        closeButton: false,
        closeOnClick: false,
        draggable: false,
        autoClose: false,
      },
    );
  };

  return (
    <FormButton
      icon={<Delete />}
      bgColor="secondary"
      clickedFn={handleClick}
      disabled={buttonDisabled}
    >
      {children}
    </FormButton>
  );
};

ConfirmButton.propTypes = {
  title: P.string,
  children: P.node,
  body: P.string,
  onChoice: P.func,
};
