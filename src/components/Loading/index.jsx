import { Autorenew } from '@styled-icons/material-outlined';
import P from 'prop-types';
import * as Styled from './styles';

const DefaultLoading = () => {
  return (
    <Styled.DefaultIcon>
      <Autorenew />
    </Styled.DefaultIcon>
  );
};

export const Loading = ({ children, loading = false }) => {
  return loading ? (
    <Styled.Container isLoading={loading}>
      {children ? children : <DefaultLoading />}
    </Styled.Container>
  ) : null;
};

Loading.propTypes = {
  children: P.node,
  loading: P.bool,
};
