import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    cursor: pointer;
    opacity: 0.7;
    transition: all 300ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  `}
`;

export const Switch = styled.div`
  ${({ theme, isActive }) => css`
    width: 6.6rem;
    height: 3.2rem;
    background: ${theme.colorGray.gray06};
    border: ${theme.spacings.xxtiny} solid ${theme.colorGray.gray10};
    border-radius: ${theme.radius.small};
    position: relative;
    box-shadow: inset -5px 5px 5px rgba(0, 0, 0, 0.1),
      0 0 5px rgba(0, 0, 0, 0.1);
    transition: all 300ms ease-in-out;

    ${isActive &&
    css`
      background: ${theme.colors.primary};
      box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
        0 0 5px ${theme.colors.primary};
      border: ${theme.spacings.xxtiny} solid
        ${theme.colorVariants.primaryDarker1};
    `}
  `}
`;

export const Slider = styled.div`
  ${({ theme, isActive }) => css`
    background: ${theme.colors.primary};
    position: absolute;
    top: 50%;
    left: 0.4rem;
    transform: translate(0, -50%);
    width: 2.4rem;
    height: 2.4rem;
    border-radius: ${theme.radius.small};
    z-index: ${theme.layers.layer2};
    transition: all 300ms ease-in-out;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1);

    ${isActive &&
    css`
      left: 3.6rem;
      box-shadow: inset -5px 5px 5px rgba(0, 0, 0, 0.1),
        0 0 5px rgba(0, 0, 0, 0.1);
      background: ${theme.colorGray.gray06};
    `}
  `}
`;

export const OnOffText = styled.div`
  ${({ theme, isActive }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.small};
    line-height: 1;
    width: 2.6rem;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 3.2rem;
    transform: translate(0, -50%);
    transition: all 300ms ease-in-out;
    z-index: ${theme.layers.layer1};
    color: ${theme.colorGray.gray14};
    text-align: right;

    ${isActive &&
    css`
      left: 0.6rem;
      color: ${theme.colors.white};
      text-align: left;
    `}
  `}
`;

export const Description = styled.div`
  ${({ theme, isActive }) => css`
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colorGray.gray14};
    text-transform: uppercase;
    font-weight: bold;

    ${isActive &&
    css`
      color: ${theme.colors.primary};
    `}
  `}
`;
