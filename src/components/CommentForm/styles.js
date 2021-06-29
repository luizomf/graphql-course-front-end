import { TextAreaContainer as FormTextArea } from 'components/FormTextArea/styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    ${FormTextArea} {
      margin: ${theme.spacings.medium} 0;
    }
  `}
`;
