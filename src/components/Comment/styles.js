import { Container as DefaultContainer } from 'components/DefaultContainer/styles';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    ${DefaultContainer} {
      background: ${lighten(0.45, theme.colors.primary)};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      margin-top: ${theme.spacings.xsmall};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;

export const CommentMeta = styled.div`
  ${({ theme }) => css`
    > span {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`;

export const CommentMetaItem = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const CommentBody = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
  `}
`;
