import React, { useContext, useState, useEffect } from 'react';
import { MessageContext } from 'Shared/Messages';
import Admin from './Admin.component';

const getUsersUrl = '/api/admin/users';

const getUsers = async fetch => {
  const response = await fetch(getUsersUrl);
  if (response.status !== 200) {
    throw response.statusText;
  }
  return response.json();
};

const AdminContainer = ({ fetch }) => {
  const { displayMessage } = useContext(MessageContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(fetch).then(
      response => {
        setUsers(response);
      },
      error => {
        displayMessage(`Une erreur est survenue: ${error}`);
      },
    );
  }, [displayMessage, fetch]);
  return <Admin fullNameOidcUser="" users={users} />;
};

export default () => <AdminContainer fetch={fetch} />;
