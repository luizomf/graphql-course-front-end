import { DangerousHtmlWrapper as DangerousHtml } from 'components/DangerousHtml/styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ _theme }) => css`
    position: relative;
  `}
`;

export const PostHeading = styled.h2`
  ${({ _theme }) => css``}
`;

export const PostMeta = styled.div`
  ${({ theme }) => css`
    color: ${theme.colorGray.gray11};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.tiny} 0;
  `}
`;

export const PostMetaItem = styled.span`
  ${({ theme }) => css`
    color: ${theme.colorGray.gray13};
    margin: 0 ${theme.spacings.xxsmall};
  `}
`;

export const PostContent = styled.div`
  ${({ theme }) => css`
    ${DangerousHtml} {
      margin: ${theme.spacings.small} 0;
    }
  `}
`;

export const PostTools = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    justify-content: flex-end;
  `}
`;
