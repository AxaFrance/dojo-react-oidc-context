import React, { useContext, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Message from './Messages.component';
import { MessageContext } from './Messages.context';

const MessageContainer = () => {
  const { message, displayMessage } = useContext(MessageContext);
  const location = useLocation();
  const [, setCurrentLocation] = useState(location.pathname);
  const onClose = useCallback(() => {
    displayMessage('');
  }, [displayMessage]);

  useEffect(() => {
    setCurrentLocation(prevLocation => {
      if (prevLocation.pathname !== location.pathname) {
        onClose();
      }
      setCurrentLocation(location);
    });
  }, [location, onClose]);
  return <Message message={message} onClose={onClose} />;
};

export default MessageContainer;
