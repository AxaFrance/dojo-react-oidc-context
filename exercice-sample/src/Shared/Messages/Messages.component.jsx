import React from "react";
import Alert from "@axa-fr/react-toolkit-alert";
import "./Messages.scss";

export const Message = ({ message, onClose }) =>
  message && (
    <Alert
      classModifier="error"
      onClose={onClose}
      title="Une erreur est survenue"
    >
      {message}
    </Alert>
  );

export default Message;
