import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    padding: ${theme.spacings.large} 0;
    margin: ${theme.spacings.large} 0;
    align-items: center;
    justify-content: center;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Consolas,
      Liberation Mono, Menlo, monospace;
    font-size: 1.8rem;
    font-weight: normal;

    span {
      font-weight: bold;
      color: ${theme.colors.primary};
    }

    a {
      padding: 5px 5px 10px 5px;
      border-radius: ${theme.radius.small};
      transition: all 300ms ease-in-out;
      position: relative;

      span {
        transition: background 600ms ease-in-out;
        margin: 0 5px;
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        width: 0;
        height: 2px;
        bottom: 0;
        background: ${theme.colors.primary};
        display: block;
        transition: left 300ms ease-in-out, width 300ms ease-in-out;
      }
    }

    a,
    a:hover,
    a:visited {
      color: inherit;
      text-decoration: none;
    }

    a:hover {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        bottom: 0;
        background: ${theme.colors.secondary};
        opacity: 1;
      }
    }

    a:hover {
      span {
        color: ${theme.colors.secondary};
      }
    }
  `}
`;
