import styled, { css } from 'styled-components';

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.deepWhite};
    padding: ${theme.spacings.large};
    margin: ${theme.spacings.large};
    width: 100%;
    max-width: ${theme.containerSizes.large};
    border-radius: ${theme.radius.large};
    box-shadow: 0 0 15px rgba(128, 128, 128, 0.2);
    transition: all 300ms ease-in-out;
    position: relative;
    overflow: hidden;

    @media ${theme.media.gteOrEqSmall} {
      &:hover {
        box-shadow: 0 0 15px rgba(128, 128, 128, 0.3);
      }
    }
  `}
`;
