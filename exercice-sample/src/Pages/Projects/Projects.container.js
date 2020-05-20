import React, { useEffect, useState, useContext } from 'react';
import { MessageContext } from 'Shared/Messages';

import Projects from './Projects.component';

const getProjectsUrl = '/api/project';

const getProjects = async fetch => {
  const response = await fetch(getProjectsUrl);
  if (response.status !== 200) {
    throw response.statusText;
  }
  return response.json();
};

const ProjectsContainer = ({ fetch }) => {
  const { displayMessage } = useContext(MessageContext);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects(fetch).then(
      response => {
        setProjects(response);
      },
      error => {
        displayMessage(`Une erreur est survenue: ${error}`);
      },
    );
  }, [displayMessage, fetch]);
  return <Projects projects={projects} />;
};

export default () => <ProjectsContainer fetch={fetch} />;
