import { darken, lighten } from 'polished';
import { createGlobalStyle, css } from 'styled-components';
import '../fonts/open-sans.css';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background: ${theme.colorGray.gray01};
    }

    body,
    button,
    input {
      font-size: ${theme.font.sizes.mediumSmall};
      font-family: ${theme.font.family.default};
      line-height: ${theme.font.lineHeight.medium};
      color: ${theme.colors.black};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.font.weight.extraBold};
    }

    ul,
    ol {
      list-style: none;
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.white} inset;
      -webkit-text-fill-color: ${theme.colors.black};
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

    /** Classes for the displayed toast **/
    .Toastify__toast--default {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    .Toastify__toast--info {
      background: ${theme.colors.info};
      color: rgba(0, 0, 0, 0.5);
    }
    .Toastify__toast--success {
      background: ${theme.colors.success};
    }
    .Toastify__toast--warning {
      background: ${theme.colors.warning};
      color: rgba(0, 0, 0, 0.5);
    }
    .Toastify__toast--error {
      background: ${theme.colors.error};
    }

    /** Classes for the progress bar **/
    .Toastify__progress-bar {
      background: rgba(255, 255, 255, 0.5);
    }
  `}
`;
