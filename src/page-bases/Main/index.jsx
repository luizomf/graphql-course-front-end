import P from 'prop-types';
import * as Styled from './styles';

export const Main = ({ children = 'Replace-Me' }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Main.propTypes = {
  children: P.node,
};
