import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children = 'Replace-Me', as = 'h1' }) => {
  return <Styled.Container as={as}>{children}</Styled.Container>;
};

Heading.propTypes = {
  children: P.node,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
