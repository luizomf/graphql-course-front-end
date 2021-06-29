import styled, { css, keyframes } from 'styled-components';

export const spinning = () => keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme, isLoading }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    color: ${theme.colors.primary};
    opacity: 0;
    visibility: hidden;
    transition: all 100ms ease-in-out;
    z-index: ${theme.layers.layer5};

    ${isLoading &&
    css`
      opacity: 1;
      visibility: visible;
    `};
  `}
`;

export const DefaultIcon = styled.div`
  ${({ theme }) => css`
    > svg {
      width: ${theme.containerSizes.xtiny};
      height: ${theme.containerSizes.xtiny};
      animation: ${spinning()} 1s infinite linear;
    }
  `}
`;
