import { DefaultContainer } from 'components/DefaultContainer';
import { Main } from 'page-bases/Main';
import * as Styled from './styles';

export function Page404() {
  return (
    <Main>
      <Styled.Container>
        <DefaultContainer>
          <h1>Page not found</h1>
          <p>The page you are looking for is not here. Sorry!</p>
        </DefaultContainer>
      </Styled.Container>
    </Main>
  );
}
