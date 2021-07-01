import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.mediumSmall};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Body = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
