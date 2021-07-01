import {
  Info,
  Password,
  Person,
  PersonAdd,
  TextFields,
  Warning,
} from '@styled-icons/material-outlined';
import { DefaultContainer } from 'components/DefaultContainer';
import { FormButton } from 'components/FormButton';
import { FormErrorMessage } from 'components/FormErrorMessage';
import { FormInput } from 'components/FormInput';
import { Loading } from 'components/Loading';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import P from 'prop-types';
import { UserPropTypes } from 'components/Post/prop-types';

export const RegisterForm = ({
  authData = {},
  handleSubmitCb,
  somethingLoading = false,
  formError = '',
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const userName = form.userName.value;
    const password = form.password.value;

    if (handleSubmitCb) {
      handleSubmitCb({ firstName, lastName, userName, password });
    }
  };

  return (
    <>
      <Styled.Container>
        <DefaultContainer>
          <h1>{authData?.id ? 'Update my account' : 'Register'}</h1>

          {!!authData?.id && (
            <Styled.FormInfoMessage messageType="warning">
              <Warning title="Warning" />
              <span>
                You are updating your user <code>{authData?.userName}</code>.
                Any changes on this page{' '}
                <strong>will cause an automatic logout</strong>. You will only
                be able to login again using the new values (after updating). We
                will not keep your old data in our databases.
              </span>
            </Styled.FormInfoMessage>
          )}

          {!!authData?.id && (
            <Styled.FormInfoMessage messageType="info">
              <Info title="Info" />
              <span>
                If you do not intend to update a field, leave the value as is.
                As we do not store your <strong>password</strong> in our
                database (for security reasons), if you do not want to change
                its value, <strong>leave it blank</strong>.
              </span>
            </Styled.FormInfoMessage>
          )}

          <Styled.RegisterForm onSubmit={handleSubmit}>
            <FormInput
              id="firstName"
              label="First name"
              placeholder="First name"
              icon={<TextFields />}
              textValue={authData?.firstName}
            />

            <FormInput
              id="lastName"
              label="Last name"
              placeholder="Last name"
              icon={<TextFields />}
              textValue={authData?.lastName}
            />

            <FormInput
              id="userName"
              label="User name"
              placeholder="User name"
              icon={<Person />}
              textValue={authData?.userName}
            />

            <FormInput
              id="password"
              label="Password"
              placeholder="Password"
              type="password"
              icon={<Password />}
            />

            {!!formError && <FormErrorMessage>{formError}</FormErrorMessage>}

            <FormButton icon={<PersonAdd />} type="submit">
              {authData?.id ? 'Update user (and logout)' : 'Create User'}
            </FormButton>
            <p>
              Click to <Link to="/login">Login</Link> if you have an account.
            </p>
          </Styled.RegisterForm>
        </DefaultContainer>
      </Styled.Container>

      {somethingLoading && <Loading loading={somethingLoading} />}
    </>
  );
};

RegisterForm.propTypes = {
  authData: P.shape(UserPropTypes.propTypes),
  handleSubmitCb: P.func,
  somethingLoading: P.bool,
  formError: P.string,
};
