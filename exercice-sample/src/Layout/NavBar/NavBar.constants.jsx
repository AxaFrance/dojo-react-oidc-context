import * as React from 'react';
import { Link } from 'react-router-dom';

export const navBarItems = [
  {
    label: 'Accueil',
    path: '/',
    default: true,
    actionElt: (
      <Link className="af-nav__link" to="/">
        Accueil
      </Link>
    ),
  },
  {
    label: 'Projets',
    path: '/projects',
    actionElt: (
      <Link className="af-nav__link" to="/projects">
        Projets
      </Link>
    ),
  },
  {
    label: 'Admin',
    path: '/admin',
    actionElt: (
      <Link className="af-nav__link" to="/admin">
        Administration
      </Link>
    ),
    protected: true,
  },
];
