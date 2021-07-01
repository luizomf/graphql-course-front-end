import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

export const ToggleButton = ({
  description = '',
  title = '',
  state = true,
  onChangeFn,
}) => {
  const [on, setOn] = useState(state);

  const handleChange = () => {
    const newState = !on;
    setOn(newState);
    onChangeFn(newState);
  };

  return (
    <Styled.Container isActive={on} onClick={handleChange}>
      <Styled.Switch isActive={on} role="button" title={title}>
        <Styled.Slider isActive={on}></Styled.Slider>
        <Styled.OnOffText isActive={on}>{on ? 'ON' : 'OFF'}</Styled.OnOffText>
      </Styled.Switch>
      {!!description && (
        <Styled.Description isActive={on}>{description}</Styled.Description>
      )}
    </Styled.Container>
  );
};

ToggleButton.propTypes = {
  description: P.string,
  title: P.string,
  state: P.bool,
  onChangeFn: P.func,
};
