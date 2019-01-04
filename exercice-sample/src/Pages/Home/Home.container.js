import Component from './Home';
import { withProps, compose } from 'recompose';
import { withOidcUser } from '@axa-fr/react-oidc-context';

const setOidcUserProps = withProps(({ oidcUser }) => ({
  connectedUserFullName: oidcUser
    ? `${oidcUser.profile.given_name} ${oidcUser.profile.family_name}`
    : undefined,
}));

const enhance = compose(
  withOidcUser,
  setOidcUserProps,
);

export default enhance(Component);
