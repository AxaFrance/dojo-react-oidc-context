import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@axa-fr/react-toolkit-alert';
import './Messages.scss';

const proptypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  classModifier: PropTypes.string,
};

const defaultProps = {
  classModifier: 'error',
};

export const Message = ({ message, onClose, classModifier }) =>
  message && (
    <Alert
      classModifier={classModifier}
      onClose={onClose}
      title="Une erreur est survenue"
    >
      {message}
    </Alert>
  );

Message.propTypes = proptypes;
Message.defaultProps = defaultProps;

export default Message;
