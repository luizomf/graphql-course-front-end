import { AuthForm } from 'components/AuthForm';
import { Helmet } from 'react-helmet';

export const Login = () => {
  return (
    <>
      <Helmet title="Login - GraphQL + Apollo-Client - Otávio Miranda" />

      <AuthForm />
    </>
  );
};
