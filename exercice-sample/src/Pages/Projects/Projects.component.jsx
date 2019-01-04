import React from "react";
import Table from "@axa-fr/react-toolkit-table";

import "./Projects.scss";

const Projects = ({ projects }) => (
  <Table>
    <Table.Header>
      <Table.Tr>
        <Table.Th>Nom du projet</Table.Th>
        <Table.Th>Version</Table.Th>
        <Table.Th>Nombre d'utilisateurs</Table.Th>
        <Table.Th>Chef de projet</Table.Th>
        <Table.Th>Email CP</Table.Th>
      </Table.Tr>
    </Table.Header>
    <Table.Body>
      {projects.map(
        ({ id, projectName, version, usersCount, owner, ownerEmail }) => (
          <Table.Tr key={id}>
            <Table.Td>{projectName}</Table.Td>
            <Table.Td>{version}</Table.Td>
            <Table.Td>{usersCount}</Table.Td>
            <Table.Td>{owner}</Table.Td>
            <Table.Td>{ownerEmail}</Table.Td>
          </Table.Tr>
        )
      )}
    </Table.Body>
  </Table>
);

export default Projects;
