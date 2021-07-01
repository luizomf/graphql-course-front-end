import styled, { css } from 'styled-components';
import { Container as DefaultContainer } from 'components/DefaultContainer/styles';

export const PostsContainer = styled.div`
  ${({ theme }) => css`
    ${DefaultContainer} {
      margin-bottom: 0;
    }

    margin-bottom: ${theme.spacings.large};
  `}
`;

export const HeadingContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacings.small};
  `}
`;
