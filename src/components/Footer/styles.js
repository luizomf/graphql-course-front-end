import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    padding: ${theme.spacings.large} 0;
    margin: ${theme.spacings.large} 0;
    align-items: center;
    justify-content: center;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Consolas,
      Liberation Mono, Menlo, monospace;
    font-size: 1.8rem;
    font-weight: normal;

    span {
      font-weight: bold;
      color: ${theme.colors.primary};
    }
  `}
`;
