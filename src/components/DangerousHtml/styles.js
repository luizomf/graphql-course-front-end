import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export const DangerousHtmlWrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    h1,
    h2,
    h3,
    p {
      margin-top: ${theme.spacings.mediumLarge};
      margin-bottom: ${theme.spacings.mediumLarge};
    }

    h1:first-child,
    h2:first-child,
    h3:first-child {
      margin-top: 0;
      margin-bottom: ${theme.spacings.mediumLarge};
    }

    ul,
    ol {
      list-style: initial;
      margin: ${theme.spacings.mediumLarge};
    }

    ol {
      list-style: decimal;
    }

    pre {
      line-height: 1.2;
      background: ${theme.colorGray.gray06};
      padding: ${theme.spacings.medium};
    }

    a {
      color: ${theme.colors.primary};
      transition: all 300ms ease-in-out;

      &:hover {
        text-decoration: none;
        color: ${darken(0.2, theme.colors.primary)};
      }

      &:visited {
        text-decoration: none;
        color: ${lighten(0.2, theme.colors.primary)};
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th,
      td {
        text-align: left;
        border: 1px solid ${theme.colorGray.gray08};
        padding: ${theme.spacings.tiny};
      }
    }

    blockquote {
      margin: 1em 0;
      padding-left: ${theme.spacings.small};
      padding-right: ${theme.spacings.tiny};
      border-left: ${theme.spacings.tiny} solid ${theme.colors.primary};
    }

    img {
      max-width: 100%;
    }
  `}
`;
