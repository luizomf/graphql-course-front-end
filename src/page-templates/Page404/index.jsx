import { DefaultContainer } from 'components/DefaultContainer';
import { Helmet } from 'react-helmet';
import * as Styled from './styles';

export function Page404() {
  return (
    <>
      <Helmet title="Page not found - GraphQL + Apollo-Client - Otávio Miranda" />

      <Styled.Container>
        <DefaultContainer>
          <h1>Page not found</h1>
          <p>The page you are looking for is not here. Sorry!</p>
        </DefaultContainer>
      </Styled.Container>
    </>
  );
}
