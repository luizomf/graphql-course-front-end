import P from 'prop-types';
import { useEffect, useState } from 'react';
import * as Styled from './styles';

export const FormTextArea = ({
  label = '',
  id,
  placeholder = '',
  changeFn,
  textValue = '',
  disabled = false,
  ...rest
}) => {
  const [value, setValue] = useState(textValue);

  const handleChange = (e) => {
    const nextValue = e.target.value;

    setValue(nextValue);

    if (changeFn) {
      changeFn(nextValue);
    }
  };

  useEffect(() => {
    setValue(textValue);
  }, [textValue]);

  return (
    <Styled.TextAreaContainer isDisabled={disabled}>
      {!!label && (
        <Styled.TextAreaLabel isDisabled={disabled} htmlFor={id}>
          {label}
        </Styled.TextAreaLabel>
      )}
      <Styled.OuterTextArea isDisabled={disabled}>
        <Styled.TextArea
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          disabled={disabled}
          {...rest}
        />
      </Styled.OuterTextArea>
    </Styled.TextAreaContainer>
  );
};

FormTextArea.propTypes = {
  id: P.string.isRequired,
  label: P.string,
  placeholder: P.string,
  changeFn: P.func,
  textValue: P.string,
  disabled: P.bool,
};
