import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ _theme }) => css``}
`;

export const RegisterForm = styled.form`
  ${({ theme }) => css`
    > div,
    > p {
      margin: ${theme.spacings.large} 0;

      > span {
        display: block;
      }
    }
  `}
`;

export const FormInfoMessage = styled.p`
  ${({ theme, messageType }) => css`
    background: ${theme.colors[messageType]};
    margin-top: ${theme.spacings.large};
    padding: ${theme.spacings.small};
    display: flex;
    gap: ${theme.spacings.small};
    align-items: center;
    flex-flow: row nowrap;
    border-radius: ${theme.radius.small};

    > svg {
      width: ${theme.font.sizes.xlarge};
      height: ${theme.font.sizes.xlarge};
      flex-shrink: 0;
    }

    code {
      background: rgba(0, 0, 0, 0.1);
      padding: ${theme.spacings.xtiny};
    }
  `}
`;
