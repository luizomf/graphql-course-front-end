import { Login, Password, Person } from '@styled-icons/material-outlined';

import * as Styled from './styles';
import { FormButton } from 'components/FormButton';
import { FormErrorMessage } from 'components/FormErrorMessage';
import { FormInput } from 'components/FormInput';
import P from 'prop-types';
import { Loading } from 'components/Loading';

const fakeCallback = (v) => v;

export const AuthForm = ({
  savedUserName = '',
  loading = false,
  formError = '',
  handleLogin = fakeCallback,
  setUserName = fakeCallback,
  setPassword = fakeCallback,
  formDisabled = true,
}) => {
  return (
    <Styled.OuterContainer>
      <Styled.FormContainer>
        <Styled.HeadingStyles>
          Login {!!savedUserName && `(${savedUserName})`}
        </Styled.HeadingStyles>

        <form onSubmit={handleLogin}>
          <FormInput
            label="username"
            id="username"
            placeholder="Type your username"
            icon={<Person />}
            changeFn={(v) => setUserName(v)}
            disabled={loading}
          />
          <FormInput
            label="password"
            id="password"
            placeholder="Type your password"
            icon={<Password />}
            changeFn={(v) => setPassword(v)}
            disabled={loading}
            type="password"
          />

          {!!formError && <FormErrorMessage>{formError}</FormErrorMessage>}

          <Styled.ButtonsContainer>
            <FormButton
              type="submit"
              icon={<Login />}
              disabled={formDisabled || loading}
            >
              Sign-in
            </FormButton>
            <span className="or-text">or</span>
            <Styled.RegisterLink to="/register">Register</Styled.RegisterLink>
          </Styled.ButtonsContainer>
        </form>
      </Styled.FormContainer>
      <Loading loading={loading} />
    </Styled.OuterContainer>
  );
};

AuthForm.propTypes = {
  savedUserName: P.string,
  loading: P.bool,
  handleLogin: P.func,
  setUserName: P.func,
  setPassword: P.func,
  formError: P.string,
  formDisabled: P.bool,
};
