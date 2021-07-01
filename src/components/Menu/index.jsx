import { Menu as MenuIcon, Close } from '@styled-icons/material-outlined';
import { Loading } from 'components/Loading';
import { ToggleButton } from 'components/ToggleButton';
import * as Styled from './styles';
import P from 'prop-types';
import { memo, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export function MenuMemo({ loading = false, data = {}, handleLogout }) {
  const [isVisible, setIsVisible] = useState(false);
  const notificationCb = useCallback((status) => {
    toast.success(`Notifications are ${status ? 'ON' : 'OFF'}`);
  }, []);
  const hideMenu = useCallback(() => setIsVisible(false), []);
  const showMenu = useCallback(() => setIsVisible(true), []);

  const handleNavClick = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      {loading && <Loading loading={loading} />}
      <Styled.Container isVisible={isVisible}>
        <Styled.HideButton isVisible={isVisible} onClick={hideMenu}>
          <Close />
        </Styled.HideButton>
        <Styled.VerticalCenter>
          <Styled.Nav onClick={handleNavClick}>
            <Styled.RouterLink to="/">Home</Styled.RouterLink>

            {!!data?.userId && (
              <>
                <Styled.RouterLink to="/post/create">
                  Create post
                </Styled.RouterLink>
                <Styled.RouterLink to="/register">
                  Update Account
                </Styled.RouterLink>
                <Styled.RouterLink to="#" onClick={handleLogout}>
                  Logout
                </Styled.RouterLink>
                <ToggleButton
                  title="Enable or disable notifications"
                  onChangeFn={() => {}}
                />
              </>
            )}

            {!data?.userId && (
              <>
                <Styled.RouterLink to="/login">Login</Styled.RouterLink>
                <Styled.RouterLink to="/register">Register</Styled.RouterLink>
              </>
            )}
          </Styled.Nav>

          <ToggleButton
            title="Toggle notifications"
            onChangeFn={notificationCb}
          />
        </Styled.VerticalCenter>

        <Styled.ShowButton isVisible={isVisible} onClick={showMenu}>
          <MenuIcon />
        </Styled.ShowButton>
      </Styled.Container>
    </>
  );
}

MenuMemo.propTypes = {
  loading: P.bool,
  handleNavClick: P.func,
  data: P.object,
  handleLogout: P.func,
};

export const Menu = memo(MenuMemo);
