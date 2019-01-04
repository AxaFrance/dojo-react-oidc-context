import Message from "./Messages.component";
import { MessageContext } from "./MessageContext";
import { fromRenderProps, withHandlers, compose, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";

const withContext = fromRenderProps(
  MessageContext.Consumer,
  ({ displayMessage, message }) => ({ displayMessage, message })
);

const sethandlers = withHandlers({
  onClose: ({ displayMessage }) => () => {
    displayMessage("");
  }
});

const withLifeCycle = lifecycle({
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.onClose();
    }
  }
});

const enhance = compose(
  withContext,
  sethandlers,
  withRouter,
  withLifeCycle
);

export default enhance(Message);
