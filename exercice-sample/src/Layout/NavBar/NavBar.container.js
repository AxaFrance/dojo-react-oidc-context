import Navbar from './NavBar.component';
import { compose, withProps } from 'recompose';
import { withRouter, matchPath } from 'react-router';
import { withOidcUser } from '@axa-fr/react-oidc-context';
import { navBarItems } from './NavBar.constants';

const findPath = props => element => {
  const match = matchPath(props.location.pathname, {
    path: element.path,
    exact: true,
  });
  return (
    (match && match.isExact) ||
    (props.location.pathname === '/' && element.default) ||
    false
  );
};

const setPosition = props => navBarItems.findIndex(findPath(props));

const withPropsHoc = withProps(props => ({
  navBarItems: navBarItems.map(item => ({
    ...item,
    visible: !item.protected || props.oidcUser,
  })),
  positionInit: setPosition(props),
}));

const enhance = compose(
  withRouter,
  withOidcUser,
  withPropsHoc,
);

export default enhance(Navbar);
