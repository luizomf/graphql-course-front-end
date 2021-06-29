import P from 'prop-types';
import { forwardRef } from 'react';
import * as Styled from './styles';

export const FormButton = forwardRef(function FormButton(
  {
    children = '',
    disabled = false,
    clickedFn,
    bgColor = 'primary',
    icon = '',
    outlined = false,
    iconOnly = false,
    type = 'button',
    buttonSize = 'normal',
    ...rest
  },
  ref,
) {
  const handleClick = () => {
    if (clickedFn) {
      clickedFn();
    }
  };

  return (
    <Styled.ButtonStyles
      disabled={disabled}
      onClick={handleClick}
      bgColor={bgColor}
      outlined={outlined}
      iconOnly={iconOnly}
      type={type}
      ref={ref}
      size={buttonSize}
      {...rest}
    >
      {!!icon && icon}
      {children}
    </Styled.ButtonStyles>
  );
});

FormButton.propTypes = {
  children: P.node,
  icon: P.node,
  disabled: P.bool,
  clickedFn: P.func,
  bgColor: P.oneOf(['primary', 'secondary']),
  buttonSize: P.oneOf(['normal', 'small']),
  outlined: P.bool,
  iconOnly: P.bool,
  type: P.string,
};
