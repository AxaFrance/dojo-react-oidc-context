import React, { createContext } from "react";
import { withStateHandlers } from "recompose";

export const MessageContext = createContext(null);

const MessagesProvider = props => {
  return (
    <MessageContext.Provider
      value={{ message: props.message, displayMessage: props.displayMessage }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

const enhance = withStateHandlers(
  () => ({
    message: ""
  }),
  {
    displayMessage: () => message => ({
      message
    })
  }
);

export default enhance(MessagesProvider);
