import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import '@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css';
import '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

addDecorator(story => <Router>{story()}</Router>);
const req = require.context('../src', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
