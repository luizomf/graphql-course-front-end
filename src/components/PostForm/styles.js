import { TextArea as FormTextArea } from 'components/FormTextArea/styles';
import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    > div,
    > p {
      margin: ${theme.spacings.large} 0;
    }

    ${FormTextArea} {
      height: ${theme.containerSizes.xsmall};
    }
  `}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.large};
    align-items: center;
  `}
`;
