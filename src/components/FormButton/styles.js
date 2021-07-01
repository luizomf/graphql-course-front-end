import styled, { css } from 'styled-components';
import { transparentize, lighten, darken } from 'polished';

const filledStyles = (theme, bgColor) => css`
  background: ${theme.colors[bgColor]};
  color: ${theme.colors.white};

  &:hover {
    background: ${darken(0.05, theme.colors[bgColor])};
    color: ${theme.colors.white};
  }

  &:focus {
    background: ${darken(0.07, theme.colors[bgColor])};
    box-shadow: 0 0 5px ${transparentize(0.5, theme.colors[bgColor])};
    color: ${theme.colors.white};
  }

  &:active {
    background: ${lighten(0.03, theme.colors[bgColor])};
    box-shadow: 0 0 8px ${transparentize(0.5, theme.colors[bgColor])};
    transform: translate(1px, 0) scale(0.99, 0.99);
    color: ${theme.colors.white};
  }
`;

const outlinedStyles = (theme, bgColor) => css`
  background: none;
  box-shadow: inset 0 0 0 ${theme.spacings.xtiny} ${theme.colors[bgColor]};
  color: ${theme.colors[bgColor]};

  &:hover {
    background: none;
    box-shadow: inset 0 0 0 ${theme.spacings.xtiny}
        ${lighten(0.1, theme.colors[bgColor])},
      inset 0 0 ${theme.spacings.huge}
        ${transparentize(0.95, theme.colors[bgColor])},
      0 0 ${theme.spacings.tiny} ${transparentize(0.7, theme.colors[bgColor])};
    color: ${theme.colors[bgColor]};
  }

  &:focus {
    background: none;
    box-shadow: inset 0 0 0 ${theme.spacings.xtiny}
        ${lighten(0.15, theme.colors[bgColor])},
      inset 0 0 ${theme.spacings.huge}
        ${transparentize(0.95, theme.colors[bgColor])},
      0 0 ${theme.spacings.xsmall} ${transparentize(0.8, theme.colors[bgColor])};
    color: ${theme.colors[bgColor]};
  }

  &:active {
    background: none;
    box-shadow: inset 0 0 0 ${theme.spacings.xtiny}
        ${lighten(0, theme.colors[bgColor])},
      inset 0 0 ${theme.spacings.huge}
        ${transparentize(0.95, theme.colors[bgColor])},
      0 0 ${theme.spacings.xsmall} ${transparentize(0.5, theme.colors[bgColor])};
    color: ${lighten(0, theme.colors[bgColor])};
    transform: translate(1px, 0) scale(0.99, 0.99);
    color: ${theme.colors[bgColor]};
  }
`;

/**
 * @param {import('styled-components').DefaultTheme} theme
 */
const buttonSizeSmall = (theme) => css`
  font-size: ${theme.font.sizes.xxsmall};
  padding: ${theme.spacings.tiny} ${theme.spacings.xsmall};

  > svg {
    margin-right: ${theme.spacings.xxsmall};
  }
`;

export const ButtonStyles = styled.button`
  ${({ theme, disabled, bgColor, outlined, iconOnly, size = 'normal' }) => css`
    border: none;
    padding: ${theme.spacings.xxsmall}
      ${theme.spacings[iconOnly ? 'xsmall' : 'medium']};
    font-size: ${theme.font.sizes.mediumSmall};
    font-weight: ${theme.font.weight.semiBold};
    border-radius: ${theme.radius.small};
    transition: background-color 300ms ease-in-out, box-shadow 300ms ease-in-out,
      transform 50ms ease-in-out, color 300ms ease-in-out;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;

    ${!disabled && filledStyles(theme, bgColor)};
    ${!disabled && outlined && outlinedStyles(theme, bgColor)};

    &:disabled {
      background: ${theme.colorGray.gray10};
      color: ${theme.colorGray.gray13};
      cursor: not-allowed;
    }

    > svg {
      width: ${theme.font.sizes.mediumLarge};
      height: ${theme.font.sizes.mediumLarge};

      ${!iconOnly &&
      css`
        margin-right: ${theme.spacings.xxsmall};
        transform: translateX(-${theme.spacings.xtiny});
      `}
    }

    ${size === 'small' && buttonSizeSmall(theme, iconOnly)};
  `}
`;
