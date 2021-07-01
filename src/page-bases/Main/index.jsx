import P from 'prop-types';
import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';

export const Main = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

Main.propTypes = {
  children: P.node,
};
