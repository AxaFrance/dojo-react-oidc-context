import React, { createContext, useState } from 'react';

export const MessageContext = createContext(null);

const MessagesProvider = ({ children }) => {
  const [message, displayMessage] = useState('');
  return <MessageContext.Provider value={{ message, displayMessage }}>{children}</MessageContext.Provider>;
};

export default MessagesProvider;
