import P from 'prop-types';
// import * as Styled from './styles';
import { Main } from 'page-bases/Main';
import { DefaultContainer } from 'components/DefaultContainer';

export const Home = ({ children = 'Replace-Me' }) => {
  return (
    <Main>
      <DefaultContainer>
        <h1>{children}</h1>
      </DefaultContainer>
    </Main>
  );
};

Home.propTypes = {
  children: P.node,
};
