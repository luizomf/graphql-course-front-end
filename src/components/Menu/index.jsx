import { Menu as MenuIcon, Close } from '@styled-icons/material-outlined';
import { Loading } from 'components/Loading';
import { ToggleButton } from 'components/ToggleButton';
import * as Styled from './styles';
import P from 'prop-types';

const fakeCb = () => false;

export function Menu({
  loading = false,
  isVisible = false,
  setIsVisible = fakeCb,
  handleNavClick = fakeCb,
  data = {},
  handleLogout = fakeCb,
}) {
  return (
    <>
      {loading && <Loading loading={loading} />}
      <Styled.Container isVisible={isVisible}>
        <Styled.HideButton
          isVisible={isVisible}
          onClick={() => setIsVisible(false)}
        >
          <Close />
        </Styled.HideButton>

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

        <Styled.ShowButton
          isVisible={isVisible}
          onClick={() => setIsVisible(true)}
        >
          <MenuIcon />
        </Styled.ShowButton>
      </Styled.Container>
    </>
  );
}

Menu.propTypes = {
  loading: P.bool,
  isVisible: P.bool,
  setIsVisible: P.func,
  handleNavClick: P.func,
  data: P.object,
  handleLogout: P.func,
};
