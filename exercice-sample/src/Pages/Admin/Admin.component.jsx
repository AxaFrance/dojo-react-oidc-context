import React from 'react';
import Table from '@axa-fr/react-toolkit-table';

import './Admin.scss';

const Admin = ({ users, fullNameOidcUser }) => (
  <>
    <p>Bonjour {fullNameOidcUser} voici la liste des utilisateurs</p>
    <Table>
      <Table.Header>
        <Table.Tr>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Prénom</Table.Th>
          <Table.Th>Age</Table.Th>
          <Table.Th>Sexe</Table.Th>
          <Table.Th>Email</Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {users.map(({ id, firstName, lastName, email, gender, age }) => (
          <Table.Tr key={id}>
            <Table.Td>{lastName}</Table.Td>
            <Table.Td>{firstName}</Table.Td>
            <Table.Td>{age}</Table.Td>
            <Table.Td>{gender}</Table.Td>
            <Table.Td>{email}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Body>
    </Table>
  </>
);

export default Admin;
