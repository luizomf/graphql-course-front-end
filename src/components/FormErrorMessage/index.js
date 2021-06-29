import styled, { css } from 'styled-components';

export const FormErrorMessage = styled.p`
  ${({ theme }) => css`
    border-radius: ${theme.radius.small};
    background: ${theme.colors.error};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.tiny} ${theme.spacings.small};
    color: ${theme.colors.white};
    margin-top: ${theme.spacings.large};
  `}
`;
