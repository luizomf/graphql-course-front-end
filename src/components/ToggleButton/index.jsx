import { useIsMounted } from 'hooks/use-is-mounted';
import P from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';

export const ToggleButton = ({
  description = '',
  title = '',
  state = true,
  onChangeFn = null,
}) => {
  const isMounted = useIsMounted();
  const onChangeRef = useRef(onChangeFn);
  const [on, setOn] = useState(state);

  useEffect(() => {
    if (!isMounted()) return;

    setOn(state);
  }, [state, isMounted]);

  useEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current(on);
    }
  }, [on]);

  const handleChange = () => {
    if (!isMounted()) return;

    setOn((s) => !s);
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
