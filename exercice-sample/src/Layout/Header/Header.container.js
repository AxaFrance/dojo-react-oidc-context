import { AuthenticationConsumer } from "@axa-fr/react-oidc-context";
import { fromRenderProps } from "recompose";

import Component from "./Header.component";

const enhance = fromRenderProps(
  AuthenticationConsumer,
  ({ oidcUser, login, logout }) => ({
    user: oidcUser
      ? {
          userName: `${oidcUser.profile.given_name} ${
            oidcUser.profile.family_name
          }`,
          email: oidcUser.profile.email
        }
      : undefined,
    login,
    logout
  })
);

export default enhance(Component);
