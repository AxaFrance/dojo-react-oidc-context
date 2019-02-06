import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Layout/App';
import * as serviceWorker from './serviceWorker';

import './ie.polyfills';

import '@axa-fr/react-toolkit-all/dist/style/bootstrap/grid.css';
import '@axa-fr/react-toolkit-all/dist/style/bootstrap/reboot.css';
import '@axa-fr/react-toolkit-all/dist/style/bootstrap/type.css';
import '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
