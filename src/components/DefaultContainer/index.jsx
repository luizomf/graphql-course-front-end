import P from 'prop-types';
import * as Styled from './styles';

export const DefaultContainer = ({ children }) => {
  return (
    <Styled.OuterContainer>
      <Styled.Container>{children}</Styled.Container>
    </Styled.OuterContainer>
  );
};

DefaultContainer.propTypes = {
  children: P.node.isRequired,
};
