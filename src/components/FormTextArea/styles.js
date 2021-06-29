import styled from 'styled-components';
import {
  inputContainer as InputContainer,
  InputStyles,
  InputLabelStyles as InputLabel,
  OuterInput as InputOuterInput,
} from '../FormInput/styles';

export const TextAreaContainer = styled(InputContainer)``;

export const OuterTextArea = styled(InputOuterInput)``;

export const TextAreaLabel = styled(InputLabel)``;

export const TextArea = styled(InputStyles).attrs({
  as: 'textarea',
})``;
