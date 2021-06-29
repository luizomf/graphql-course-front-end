import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const inputContainer = styled.div`
  ${({ _theme }) => css`
    display: flex;
    flex-flow: column wrap;
  `}
`;

export const OuterInput = styled.div`
  ${({ theme, isDisabled, hasError }) => css`
    border: ${theme.spacings.xtiny} solid ${theme.colorGray.gray09};
    border-radius: ${theme.radius.small};
    transition: all 300ms ease-in-out;
    background: ${theme.colorGray.gray04};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    svg {
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
      margin-left: ${theme.spacings.xxsmall};
      color: ${hasError ? theme.colors.error : theme.colorGray.gray11};
      transition: all 300ms ease-in-out;
    }

    &:focus-within {
      border-color: ${theme.colors[hasError ? 'error' : 'primary']};
      background: ${theme.colors.white};
      box-shadow: 0 0 5px
        ${transparentize(0.5, theme.colors[hasError ? 'error' : 'primary'])};
    }

    &:focus-within svg {
      color: ${theme.colors[hasError ? 'error' : 'primary']};
    }

    ${hasError &&
    css`
      border-color: ${theme.colors.error};
    `}

    ${isDisabled &&
    css`
      border-color: ${theme.colors.gray09};
      background: ${theme.colorGray.gray09};
      cursor: not-allowed;
    `}
  `}
`;

export const InputStyles = styled.input`
  ${({ theme, hasError }) => css`
    outline: none;
    width: 100%;
    border: none;
    background: none;
    font-size: ${theme.font.sizes.mediumSmall};
    line-height: ${theme.font.sizes.mediumSmall};
    padding-top: ${theme.spacings.xxsmall};
    padding-bottom: ${theme.spacings.xxsmall};
    padding-right: ${theme.spacings.xsmall};
    padding-left: ${theme.spacings.xsmall};
    transition: all 300ms ease-in-out;

    &::placeholder {
      color: ${theme.colorGray.gray11};
      transition: all 300ms ease-in-out;
    }

    &:focus {
      &::placeholder {
        color: ${theme.colorGray.gray14};
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: ${theme.colorGray.gray12};
    }

    ${hasError &&
    css`
      color: ${theme.colors.error};
    `}
  `}
`;

export const InputLabelStyles = styled.label`
  ${({ theme, isDisabled, hasError }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall} 0;
    cursor: pointer;

    ${hasError &&
    css`
      color: ${theme.colors.error};
    `}

    ${isDisabled &&
    css`
      color: ${theme.colorGray.gray09};
      cursor: not-allowed;
    `}
  `}
`;

export const InputError = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.small};
  `}
`;
