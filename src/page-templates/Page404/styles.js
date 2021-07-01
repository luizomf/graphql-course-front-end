import styled from 'styled-components';
import { Container as DefaultContainer } from 'components/DefaultContainer/styles';

export const Container = styled.div`
  text-align: center;

  ${DefaultContainer} {
    margin-bottom: 0;
  }

  h1,
  p {
    margin-bottom: 2rem;
  }
`;
