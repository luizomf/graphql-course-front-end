import { DefaultContainer } from 'components/DefaultContainer';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const DefaultError = ({ error }) => {
  const handleReload = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <Styled.Container>
      <DefaultContainer>
        <h1>Something went wrong. Sorry 😭!</h1>
        <p>
          Here is the error message: <code>{error.message}</code>
        </p>
        <p>
          Try to{' '}
          <a onClick={handleReload} href="#">
            reload the page
          </a>{' '}
          , <Link to="/">go home</Link> or <Link to="/login">login</Link> again
        </p>
      </DefaultContainer>
    </Styled.Container>
  );
};

DefaultError.propTypes = {
  error: P.instanceOf(Error),
};
