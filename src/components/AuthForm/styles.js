import { darken } from 'polished';
import { Link } from 'react-router-dom';
import { DefaultContainer } from 'components/DefaultContainer';
import styled, { css } from 'styled-components';

export const HeadingStyles = styled.h1`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    position: relative;
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1.3;
  `}
`;

export const OuterContainer = styled.div`
  ${({ _theme }) => css`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const FormContainer = styled(DefaultContainer)`
  ${({ theme }) => css`
    max-width: ${theme.containerSizes.medium};

    > div {
      margin-bottom: ${theme.spacings.small};
    }

    @media ${theme.media.gteOrEqSmall} {
      > .or-text {
        display: none;
      }

      &:hover {
        box-shadow: 0 0 15px rgba(128, 128, 128, 0.3);
      }
    }
  `}
`;

export const RegisterLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    transition: all 300ms ease-in-out;
    text-decoration: none;

    &:hover {
      color: ${darken(0.2, theme.colors.primary)};
    }
  `}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.large};
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.medium};
    align-items: center;

    @media ${theme.media.lteOrEqSmall} {
      flex-flow: row wrap;

      > .or-text {
        display: none;
      }
    }

    @media ${theme.media.lteOrEqSmallest} {
      flex-flow: column nowrap;

      > .or-text {
        display: none;
      }
    }
  `}
`;
