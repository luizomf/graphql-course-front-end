import { darken, transparentize } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Container as ToggleButton } from '../ToggleButton/styles';

export const Container = styled.div`
  ${({ theme, isVisible = false }) => css`
    position: fixed;
    width: 32rem;
    height: 100vh;
    background: rgba(255, 255, 255, 1);
    padding: ${theme.spacings.large};
    overflow-y: auto;
    left: ${isVisible ? 0 : '-32rem'};
    bottom: 0;
    top: 0;
    z-index: ${theme.layers.layer2};
    transition: left 300ms ease-in-out;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
    flex-flow: column nowrap;
  `}

  ${ToggleButton} {
    flex-flow: column nowrap;
  }
`;

export const BlurBg = styled.div`
  ${({ theme, isVisible = false }) => css`
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${theme.layers.layer1};
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 100vh;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease-in-out;

    ${isVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  `}
`;

export const ShowButton = styled.button`
  ${({ theme, isVisible = false }) => css`
    cursor: pointer;
    position: fixed;
    content: '';
    left: 2rem;
    bottom: 0;
    top: 2rem;
    width: 4rem;
    height: 4rem;
    padding: 0;
    background: ${transparentize(0.5, theme.colors.primary)};
    backdrop-filter: blur(5px);
    color: ${theme.colors.deepWhite};
    z-index: ${theme.layers.layer3};
    font-size: ${theme.font.sizes.large};
    line-height: 4rem;
    outline: none;
    border: none;
    transition: left 300ms ease-in-out, opacity 300ms ease-in-out,
      background 300ms ease-in-out, transform 300ms ease-in-out;
    opacity: ${isVisible ? 0 : 1};
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1);
    border-radius: ${theme.radius.small};

    &:hover,
    &:active {
      transform: scale(1.05);
      background: ${darken(0.1, theme.colors.primary)};
    }

    > svg {
      width: ${theme.font.sizes.large};
      height: ${theme.font.sizes.large};
    }
  `}
`;

export const HideButton = styled.button`
  ${({ theme, isVisible = false }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.radius.small};
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    left: 27rem;
    opacity: ${isVisible ? 1 : 0};
    transition: left 300ms ease-in-out, opacity 300ms ease-in-out,
      transform 300ms ease-in-out;
    z-index: ${theme.layers.layer3};
    transform: rotate(0deg);

    > svg {
      width: ${theme.font.sizes.small};
      height: ${theme.font.sizes.small};
    }

    &:hover,
    &:active {
      background: ${darken(0.1, theme.colors.primary)};
      transform: rotate(90deg);
    }
  `}
`;

export const Nav = styled.nav`
  margin-top: 4rem;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
`;

export const RouterLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: none;
    display: block;
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.medium};

    &:hover,
    &:active {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `}
`;

export const VerticalCenter = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-height: 321px) {
    top: auto;
    transform: none;
  }
`;
