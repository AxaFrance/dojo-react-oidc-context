import Component from "./Admin.component";
import {
  lifecycle,
  withState,
  compose,
  fromRenderProps,
  renderNothing,
  branch,
  withHandlers
} from "recompose";
import { MessageContext } from "Shared/Messages";
import withAuthentication from "@axa-fr/react-oidc-context-fetch/dist/withAuthentication";

const getUsersUrl = "/api/admin/users";
const usersState = withState("users", "setUsers", []);

const withFetch = withHandlers({
  getUsers: ({ fetch }) => async () => {
    const response = await fetch(getUsersUrl);
    if (response.status !== 200) {
      throw response.statusText;
    }
    return response.json();
  }
});

const lifecycleHoc = lifecycle({
  async componentDidMount() {
    try {
      const users = await this.props.getUsers();
      this.props.setUsers(users);
    } catch (error) {
      this.props.displayMessage(error);
    }
  }
});

const withContext = fromRenderProps(
  MessageContext.Consumer,
  ({ displayMessage }) => ({ displayMessage })
);

const withBranch = hideIfNotData => branch(hideIfNotData, renderNothing);

export default compose(
  usersState,
  withContext,
  withAuthentication(fetch),
  withFetch,
  lifecycleHoc,
  withBranch(({ users }) => !users || users.length === 0)
)(Component);
