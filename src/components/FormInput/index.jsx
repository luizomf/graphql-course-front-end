import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import * as Styled from './styles';

export const FormInput = ({
  label = '',
  id,
  placeholder = '',
  icon = '',
  type = 'text',
  changeFn,
  textValue = '',
  disabled = false,
  error = '',
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(textValue);
  }, [textValue]);

  const handleChange = (e) => {
    const element = e.target;
    const nextValue = element.value;

    setValue(nextValue);

    if (changeFn) {
      changeFn(nextValue, element);
    }
  };

  return (
    <Styled.inputContainer isDisabled={disabled} hasError={!!error}>
      {!!label && (
        <Styled.InputLabelStyles
          isDisabled={disabled}
          htmlFor={id}
          hasError={!!error}
        >
          {label}
        </Styled.InputLabelStyles>
      )}
      <Styled.OuterInput isDisabled={disabled} hasError={!!error}>
        {!!icon && icon}
        <Styled.InputStyles
          id={id}
          name={id}
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          value={value}
          disabled={disabled}
          hasError={!!error}
        />
      </Styled.OuterInput>
      {!!error && <Styled.InputError>{error}</Styled.InputError>}
    </Styled.inputContainer>
  );
};

FormInput.propTypes = {
  icon: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  changeFn: PropTypes.func,
  textValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};
